/**
 * Created by Amanda on 1/13/2018.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends Component {

    handleDelete(e){
        e.preventDefault();
        this.props.onDeleteClick(this.props.note.id);
        console.log(this);
    }

    renderNoteItem(){
        //console.log(this.props.note);
        if(this.props.note.id != null){

            return(
                <div className="col-sm-6">
                    <h3>{this.props.note.title}</h3>
                    <p>{this.props.note.body}</p>
                    <button onClick={ (e) => this.handleDelete(e)}>Delete</button>
                </div>
            );
        }else{
            return(
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
