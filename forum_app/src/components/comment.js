import React, { Component } from 'react';
import Reply from './reply';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { editCommentId: -1, editCommentValue: '' }
        this.toggleEditComment = this.toggleEditComment.bind(this);
        this.saveEditComment = this.saveEditComment.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    toggleEditComment(id, value) {
        if (value) {
            this.setState({ editCommentId: id, editCommentValue: value});
        }
        else
        {
            this.setState({ editCommentId: -1 });
        }
    }
    renderReplies(replyData, commentId) {
        const { id } = replyData;
        return (
            <div key={id}>
                <Reply replyData={replyData}/>
            </div>
        );
    }
    onInputChange(event) {
        this.setState({ editCommentValue: event.target.value });
    }
    saveEditComment() {
        const id = this.state.editCommentId;
        const val = this.state.editCommentValue;
        this.props.onEditcomment({ id, val });
        this.toggleEditComment(-1);
    }
    render() {
        const { id, userId, text, userName, replies } = this.props.commentData;
        const editCommentId= this.state.editCommentId;
        const editCommentValue = this.state.editCommentValue;
        const editCommentText =
            <div className="edit-comment-wrap" onClick={() => this.toggleEditComment(id, text)} >
                <div className="edit-comment-text">Edit</div>
            </div>;
        const editCommentInput =
            <div className="save-comment-wrap">
                <input type="text" className="form-control" value={editCommentValue} onChange={this.onInputChange} />
                <div className="save-comment-text" onClick={this.saveEditComment}>Save</div>
                <div className="cancel-comment-text" onClick={() => this.toggleEditComment(-1)}>Cancel</div>
            </div>;
        return (
            <div>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    <div>
                        {id !== editCommentId && text }
                        {userId === 10 && id === editCommentId && editCommentInput }
                    </div>
                    <div className="time">
                        Posted on Jan 18, 2019
                    </div>
                    {userId === 10 && id !== editCommentId && editCommentText }
                </div>
                <div className="replies-wrap">
                    {replies.map((reply) => this.renderReplies(reply, id))}
                </div>
            </div>
        );
    }
}
export default Comment;