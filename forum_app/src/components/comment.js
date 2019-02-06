import React, { Component } from 'react';
import Reply from './reply';
class Comment extends Component {
    constructor(props) {
        super(props);
    }
    renderReplies(replyData, commentId) {
        const { id } = replyData;
        return (
            <div key={id}>
                <Reply replyData={replyData}/>
            </div>
        );
    }
    render() {
        const { id, text, userName, replies } = this.props.commentData;
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
                <div className="replies-wrap">
                    {replies.map((reply) => this.renderReplies(reply, id))}
                </div>
            </div>
        );
    }
}
export default Comment;