import React, { Component } from 'react';
const RenderTodos = (props) => {
    const todos = props.todos;
    const todoItems = todos.map((todo) =>
        // Only do this if items have no stable IDs
        <li key={todo.id}>
            {todo.title}
            <br />
            {todo.content}
            <hr />
        </li>
    );
    return (
        <ul>
            {todoItems}
        </ul>
    );
}
export default class ListMap extends React.Component {
    todos = [
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ];
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <RenderTodos todos={this.todos} />
        );
    }
}