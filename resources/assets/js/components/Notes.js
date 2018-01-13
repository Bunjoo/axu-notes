/**
 * Created by Amanda on 1/13/2018.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Notes extends Component {

    componentDidMount() {
        this.handleNotes();
    }

    handleNotes() {
        let notes = this.props.notes;
        let url;

        url = '/notes/public/api/notes';

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.props.getNotes(data);
            });


    }

    handleClick(e, note){
        e.preventDefault();

        let url = '/notes/public/api/note/' + note.id;

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.props.clickNote(data);
            });

    }

    render() {

        let noteItems;
        if (this.props.notes) {
            noteItems = this.props.notes.map(note => {
                return (
                    <p key={note.id}>
                        <strong>
                            <a href="" onClick={ (e) => this.handleClick(e ,note)}>
                                {note.title}
                            </a>
                        </strong>
                    </p>
                );
            });
        }

        return (
            <div className="col-sm-6">
                <h3>Notes</h3>
                {noteItems}
            </div>

        );
    }
}

export default Notes;
