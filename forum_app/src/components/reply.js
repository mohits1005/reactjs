import React, { Component } from 'react';
class Reply extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { text, userName } = this.props.replyData;
        return (
            <div>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    <div>
                        {text}
                    </div>
                    <div className="time">
                        Posted on Jan 18, 2019
                    </div>
                </div>
            </div>
        );
    }
}
export default Reply;