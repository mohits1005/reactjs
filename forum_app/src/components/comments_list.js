import React, { Component } from 'react';
class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.renderComment = this.renderComment.bind(this);
    }
    renderComment(commentData) {
        const {id, text, userName} = commentData;
        return (
            <div className="comment-wrap" key={id}>
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
        );
    }
    render() {
        const comments = this.props.comments;
        const comments_count = comments.length;
        const comments_string = comments_count > 0 ? 'There are '+comments_count + ' Comments ':'';
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-md-8 comments-container">
                    <div className="comments-count">
                        {comments_string}
                        <span className="add-comment">
                            ADD YOURS
                        </span>
                    </div>
                    {comments.map(this.renderComment)}
                </div>
            </div>
        );
    }
}

export default CommentsList;
