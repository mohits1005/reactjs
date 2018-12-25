import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertNote } from '../actions/index';
export class NotesInput extends Component {
    onInputNoteChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }
    onInputBodyChange(event) {
        // console.log(event.target.value);
        this.setState({ noteBody: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        console.log('Container: ' + this.state.term+' '+this.state.noteBody)
        this.props.insertNote({ term: this.state.term, noteBody: this.state.noteBody});
        this.setState({ term: '', noteBody:'' });
    }
    constructor(props) {
        super(props);
        this.state = { term: '', noteBody: '' };
        this.onInputNoteChange = this.onInputNoteChange.bind(this);
        this.onInputBodyChange = this.onInputBodyChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter a Note!!!"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputNoteChange}
                />
                <input
                    placeholder="Enter Note Body!!!"
                    className="form-control"
                    value={this.state.noteBody}
                    onChange={this.onInputBodyChange}
                />
                <div className="">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ insertNote }, dispatch)
}
export default connect(null, mapDispatchToProps)(NotesInput);