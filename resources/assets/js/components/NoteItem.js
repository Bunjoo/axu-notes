/**
 * Created by Amanda on 1/13/2018.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.onDeleteClick(this.props.note.id);
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.onEditClick(this.refs);
        this.setState({isEditing:false});
    }

    onEditClick() {
        this.setState({isEditing: true});
    }

    onCancelClick() {
        this.setState({isEditing: false});
    }

    renderEditNote() {

        if (this.state.isEditing) {
            return (
                <div className="col-sm-12">
                    <h2>Edit Note </h2>

                    <form onSubmit={this.handleEdit.bind(this)}>
                        <div>
                            <label> title </label><br/>
                            <input type="text" ref="title" defaultValue={this.props.note.title}/><br/>
                        </div>
                        <div>
                            <label> Body </label><br />
                            <textarea ref="body" defaultValue={this.props.note.body}/>
                        </div>

                        <div>
                            <h4>User ID: {this.props.note.user_id}</h4>
                            <input type="submit" value="Save"/>
                            <button onClick={this.onCancelClick.bind(this)}> Cancel</button>
                        </div>
                    </form>
                </div>
            );
        }
    }

    renderNoteItem() {
        if (this.props.note.id != null) {
            if (this.state.isEditing) {
                return this.renderEditNote();
            }
            return (
                <div className="col-sm-6">
                    <h3>{this.props.note.title}</h3>
                    <p>{this.props.note.body}</p>

                    <h4>User ID: {this.props.note.user_id}</h4>
                    <button onClick={this.onEditClick.bind(this)}>Edit</button>
                    <button onClick={ (e) => this.handleDelete(e)}>Delete</button>
                </div>
            );
        } else {
            return (
                <div className="col-sm-6">
                </div>
            );
        }
    }

    render() {
        return this.renderNoteItem();

    }
}

export default NoteItem;
