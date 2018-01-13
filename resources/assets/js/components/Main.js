/**
 * Created by Amanda on 1/13/2018.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notes from './Notes';
import NoteItem from './NoteItem';

/* An example React component */
class Main extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            note: {}
        }
    }

    handleNotes(data){
        let notes = this.state.notes;

        for (let i = 0; i < data.data.length; i++) {
            notes.push(data.data[i]);
        }
        this.setState({notes:notes});
    }

    setNote(data){
        this.setState({note:data.data});
    }

    render() {
        return (
            <div className="container">
                <Notes notes={this.state.notes}
                        getNotes={this.handleNotes.bind(this)}
                       clickNote={this.setNote.bind(this)}
                />
                <NoteItem note={this.state.note} />
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}