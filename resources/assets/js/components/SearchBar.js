/**
 * Created by Amanda on 1/14/2018.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {

    handleChange() {
        this.props.onSearch(this.refs.filterTextInput.value);
    }

    render() {

        return (
            <div className="col-sm-12">
                <form >
                    <div>
                        <input type="text" placeholder="Search notes..." ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;
