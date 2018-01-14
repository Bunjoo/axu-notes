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
        //this.refs.title.value = "";
        //this.refs.body.value = "";

    }

    render() {

        return (
            <div className="col-sm-12">
                <h3> Add an Note </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label> title </label><br />
                        <input type="text" ref="title"/>
                    </div>

                    <div>
                        <label> Body </label><br />
                        <textarea ref="body"/>
                    </div>

                    <div>
                        <label>User ID:</label><br />
                        <input type="text" ref="user_id"/>
                    </div><br/>

                    <input type="submit" value="Submit"/>


                </form>
            </div>
        );
    }

}

export default AddNote;
