import React, { Component } from 'react';
import Reply from './reply';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { editCommentId: -1 }
        this.toggleEditComment = this.toggleEditComment.bind(this);
        this.saveEditComment = this.saveEditComment.bind(this);
    }
    toggleEditComment(id) {
        this.setState({ editCommentId: id});
    }
    renderReplies(replyData, commentId) {
        const { id } = replyData;
        return (
            <div key={id}>
                <Reply replyData={replyData}/>
            </div>
        );
    }
    saveEditComment(val) {
        const id = this.state.editCommentId;
        this.props.onEditcomment({ id, val });
        this.toggleEditComment(-1);
    }
    render() {
        const { id, userId, text, userName, replies } = this.props.commentData;
        const editCommentId= this.state.editCommentId;
        const editCommentText =
            <div className="edit-comment-wrap" onClick={() => this.toggleEditComment(id, text)} >
                <div className="edit-comment-text">Edit</div>
            </div>;
        let showEditCommentInput;
        if (userId === 10 && id === editCommentId)
        {
            showEditCommentInput = 
                <EditCommentInput text={text} saveEditComment={this.saveEditComment} toggleEditComment={this.toggleEditComment}>
                </EditCommentInput>;
        }
        return (
            <div>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    <div>
                        {id !== editCommentId && text }
                        {showEditCommentInput}
                    </div>
                    <div className="time">
                        Posted on Jan 18, 2019
                    </div>
                    {userId === 10 && id !== editCommentId && editCommentText }
                    {this.displayEditComment}
                </div>
                <div className="replies-wrap">
                    {replies.map((reply) => this.renderReplies(reply, id))}
                </div>
            </div>
        );
    }
}
class EditCommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = { editCommentValue: props.text };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({ editCommentValue: event.target.value });
    }
    render() {
        const editCommentValue = this.state.editCommentValue;
        if (!this.props.isVisible)
        return (
            <div className="save-comment-wrap">
                <input type="text" className="form-control" value={editCommentValue} onChange={this.onInputChange} />
                <div className="save-comment-text" onClick={() => this.props.saveEditComment(editCommentValue)}>Save</div>
                <div className="cancel-comment-text" onClick={() => this.props.toggleEditComment(-1)}>Cancel</div>
            </div>
        );
    }

}
export default Comment;