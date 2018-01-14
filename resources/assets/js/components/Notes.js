/**
 * Created by Amanda on 1/13/2018.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Notes extends Component {

    componentDidMount() {
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

    getPage(e, value){
        e.preventDefault();

        this.props.getPages(value);
    }

    renderPageNav(){
        if(this.props.meta.current_page == 1){
            return(
                <div>
                    <button value="first" disabled onClick={ (e) => this.getPage(e, "first") }>First</button>
                    <button value="prev" disabled onClick={ (e) => this.getPage(e, "prev") }>Prev</button>

                    <button value="next" onClick={ (e) => this.getPage(e, "next") }>Next</button>
                    <button value="last" onClick={ (e) => this.getPage(e, "last") }>Last</button>
                </div>
            );
        }
        else if(this.props.meta.current_page == this.props.meta.last_page){
            return(
                <div>
                    <button value="first" onClick={ (e) => this.getPage(e, "first") }>First</button>
                    <button value="prev" onClick={ (e) => this.getPage(e, "prev") }>Prev</button>

                    <button value="next" disabled onClick={ (e) => this.getPage(e, "next") }>Next</button>
                    <button value="last" disabled onClick={ (e) => this.getPage(e, "last") }>Last</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <button value="first" onClick={ (e) => this.getPage(e, "first") }>First</button>
                    <button value="prev" onClick={ (e) => this.getPage(e, "prev") }>Prev</button>

                    <button value="next" onClick={ (e) => this.getPage(e, "next") }>Next</button>
                    <button value="last" onClick={ (e) => this.getPage(e, "last") }>Last</button>
                </div>
            );
        }
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
                <p>Page: {this.props.meta.current_page} of {this.props.meta.last_page} </p>
                {this.renderPageNav()}
            </div>

        );
    }
}

export default Notes;
