import React, { Component } from 'react';
import { connect } from 'react-redux';
export class NotesList extends Component {
    renderNote(noteData) {
        const title = noteData.title;
        const body = noteData.body;
        const time = noteData.time;
        const status = noteData.status;
        return (
            <tr key={title}>
                <td>{title}</td>
                <td>{body}</td>
                <td>{time}</td>
                <td>{status}</td>
                <td>
                    <button type="button" className="btn btn-success">
                        Done
                    </button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">
                        Remove
                    </button>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.notes.map(this.renderNote)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps({ notes }) {
    return { notes }
}
export default connect(mapStateToProps)(NotesList);