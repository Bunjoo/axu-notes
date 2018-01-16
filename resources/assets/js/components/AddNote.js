/**
 * Created by Amanda on 1/13/2018.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddNote extends Component {

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.refs);

        console.log(this);
        this.refs.title.value = "";
        this.refs.body.value = "";

    }

    handleNewNote(){
        if(this.props.addNote == false){
            this.props.onAddClick();
        }
        else{
            this.props.onAddClick();
        }

    }

    renderAddNote(){
        if(this.props.addNote){
            let user_id = document.getElementsByName('user_id')[0].getAttribute('content');

            return(
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <h3> Add a Note </h3>
                        <div>
                            <label> title </label><br />
                            <input type="text" ref="title"/>
                        </div>

                        <div>
                            <label> Body </label><br />
                            <textarea ref="body"/>
                        </div>

                        <div>
                            <input type="hidden" value={user_id} ref="user_id"/>
                        </div><br/>

                        <input type="submit" value="Submit"/>
                        <button onClick={this.handleNewNote.bind(this)}>Cancel</button>
                    </form>
                </div>
            );
        }
        else{
            return(
                <button onClick={this.handleNewNote.bind(this)} type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
            );
        }
    }


    render() {
        let className;

        if(this.props.addNote == true){
            className = "col-sm-12"
        }
        else{
            className = "col-sm-offset-11   col-sm-1"
        }

        return (
            <div className={className}>
                {this.renderAddNote()}

            </div>
        );
    }

}

export default AddNote;
