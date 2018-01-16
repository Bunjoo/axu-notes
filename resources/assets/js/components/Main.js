/**
 * Created by Amanda on 1/13/2018.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notes from './Notes';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import SearchBar from './SearchBar';

/* An example React component */
class Main extends Component {

    constructor() {
        super();
        this.state = {
            notes: [],
            note: {},
            pages: [],
            meta: []
        }
    }

    componentDidMount() {
        this.handleNotes();
    }

    handleNotes(input) {
        let notes = this.state.notes;
        let url;

        notes = [];

        if (input == null) {
            url = '/notes/public/api/notes' + '?user_id=' + this.getUserID();
            fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(data => {

                    for (let i = 0; i < data.data.length; i++) {
                        notes.push(data.data[i]);
                    }
                    this.setState({pages: data.links});
                    this.setState({meta: data.meta});

                });
        } else {
            for (let i = 0; i < input.data.length; i++) {
                notes.push(input.data[i]);
            }

            this.setState({pages: input.links});
            this.setState({meta: input.meta});
        }

        this.setState({notes: notes});

    }

    setNote(data) {
        this.setState({note: data.data});
    }

    handleDeleteNote(id) {
        let url = '/notes/public/api/note/' + id + '?user_id=' + this.getUserID();
        let page;

        fetch(url, {method: 'DELETE'})
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.meta.last_page < this.state.meta.current_page)
                    page = data.meta.last_page;
                else
                    page = this.state.meta.current_page;

                this.handleGetPages(page);
            });

        this.setState({note: []});
    }

    handleGetPages(value) {
        let url;
        let user_id = '&user_id=' + this.getUserID();
        switch (value) {
            case 'first':
                url = this.state.pages.first;
                break;
            case 'prev':
                url = this.state.pages.prev;
                break;
            case 'next':
                url = this.state.pages.next;
                break;
            case 'last':
                url = this.state.pages.last;
                break;
            default:
                url = '/notes/public/api/notes?page=' + value;
        }


        fetch(url + user_id)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.handleNotes(data);
            });
    }

    handleAddNote(refs) {
        if (refs.title.value === '') {
            alert('A title is required');
        } else {

            let page;
            let url = '/notes/public/api/note' + '?user_id=' + this.getUserID();

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'title': refs.title.value,
                    'body': refs.body.value,
                    'user_id': refs.user_id.value
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    page = data.meta.last_page;

                    this.setState({pages: data.links});
                    this.setState({meta: data.meta});

                    this.handleGetPages(page);
                });
        }
    }

    handleEditNote(refs) {
        let url = '/notes/public/api/note' + '?user_id=' + this.getUserID();
        let page;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'note_id': this.state.note.id,
                'title': refs.title.value,
                'body': refs.body.value,
                'user_id': this.state.note.user_id
            })
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setNote(data);
                page = this.state.meta.current_page;
                this.handleGetPages(page);
            });

    }

    handleSearch(input) {

        let url = '/notes/public/api/notes?searchTerm=' + input + '&user_id=' + this.getUserID();

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.handleNotes(data);
            });


    }

    getUserID() {
        return document.getElementsByName('user_id')[0].getAttribute('content');
    }

    render() {


    //    <SearchBar
    //        onSearch={this.handleSearch.bind(this)}
    //
    //    />
    //    <Notes
    //    notes={this.state.notes}
    //    pages={this.state.pages}
    //    meta={this.state.meta}
    //    getNotes={this.handleNotes.bind(this)}
    //    clickNote={this.setNote.bind(   this)}
    //    getPages={this.handleGetPages.bind(this)}
    ///>

    //    <NoteItem
    //        note={this.state.note}
    //        onEditClick={this.handleEditNote.bind(this)}
    //        onDeleteClick={this.handleDeleteNote.bind(this)}
    //    />
    //    <AddNote
    //    onSubmit={this.handleAddNote.bind(this)}
    //    note={this.state.note}
    ///>


        return (
            <div className="container">
                <div className="row">
                    <div className="leftside col-md-6">
                        <SearchBar
                            onSearch={this.handleSearch.bind(this)}

                        />
                        <Notes
                            notes={this.state.notes}
                            pages={this.state.pages}
                            meta={this.state.meta}
                            getNotes={this.handleNotes.bind(this)}
                            clickNote={this.setNote.bind(   this)}
                            getPages={this.handleGetPages.bind(this)}
                        />
                    </div>
                    <div className="rightside col-md-6">
                        <AddNote
                            onSubmit={this.handleAddNote.bind(this)}
                            note={this.state.note}
                        />
                        <NoteItem
                            note={this.state.note}
                            onEditClick={this.handleEditNote.bind(this)}
                            onDeleteClick={this.handleDeleteNote.bind(this)}
                        />

                    </div>
                </div>
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