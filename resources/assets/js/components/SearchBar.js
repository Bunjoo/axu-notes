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
                <h3> Search: </h3>
                <form >
                    <div>
                        <label> Search Title:  </label>
                        <input type="text" ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;
