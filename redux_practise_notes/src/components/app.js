import React, { Component } from 'react';
import NotesList from '../containers/notes_list';
import NotesInput from '../containers/notes_input';
export default class App extends Component {
  render() {
    return (
      <div>
        <NotesInput />
        <NotesList />
      </div>
    );
  }
}
