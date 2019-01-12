import React, { Component } from 'react';
import FancyBorder from './fancyborder';
function Contacts() {
    return <div className="Contacts" />;
}
function Chat() {
    return <div className="Chat" />;
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
export default function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                } />
        </FancyBorder>
    );
}