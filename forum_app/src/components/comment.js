import React, { Component } from 'react';
import Reply from './reply';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { editCommentId: -1, addReplyCommentId: -1 }
        this.toggleEditComment = this.toggleEditComment.bind(this);
        this.saveEditComment = this.saveEditComment.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.onAddReply = this.onAddReply.bind(this);
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
    toggleReply(id){
        this.setState({ addReplyCommentId: id});
    }
    onAddReply(reply){
        // console.log(reply);
        this.props.onAddReply(reply);
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
        const addReplyCommentId = this.state.addReplyCommentId;
        let showAddReplyInput;
        if (id === addReplyCommentId) {
            showAddReplyInput =
                <AddReplyInput id={id} onAddReply={this.onAddReply} toggleReply={this.toggleReply} replies={replies}>
            </AddReplyInput>;
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
                    <div className="add-reply" onClick={() => this.toggleReply(id)}>
                        Reply
                    </div>
                    {userId === 10 && id !== editCommentId && editCommentText }
                    {this.displayEditComment}
                </div>
                <div className="replies-wrap">
                    {replies.map((reply) => this.renderReplies(reply, id))}
                </div>
                {showAddReplyInput}
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
        return (
            <div className="save-comment-wrap">
                <input type="text" className="form-control" value={editCommentValue} onChange={this.onInputChange} />
                <div className="save-comment-text" onClick={() => this.props.saveEditComment(editCommentValue)}>Save</div>
                <div className="cancel-comment-text" onClick={() => this.props.toggleEditComment(-1)}>Cancel</div>
            </div>
        );
    }

}
class AddReplyInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.addNewReplyOnchange = this.addNewReplyOnchange.bind(this);
        this.saveNewReply = this.saveNewReply.bind(this);
    }
    addNewReplyOnchange(event) {
        this.setState({ value: event.target.value });
    }
    saveNewReply() {
        const commentId = this.props.id;
        const replies = this.props.replies;
        const text = this.state.value;
        let id = 1;
        if (replies !== undefined && replies.length > 0) {
            id = replies.length + 1;
        }
        const userId = 10;
        const userName = 'Anonymous';
        const reply = { commentId, id, userId, userName, text };
        this.props.onAddReply(reply);
        this.props.toggleReply(-1);
    }
    render() {
        const value = this.state.value;
        return (
            <div className="add-new-reply">
                <input type="text" className="form-control" placeholder="Add Reply here.." value={value} onChange={this.addNewReplyOnchange} />
                <div className="save-reply-text" onClick={this.saveNewReply}>Save</div>
                <div className="cancel-reply-text" onClick={() => this.props.toggleReply(-1)}>Cancel</div>
            </div>
        )
    }
}
export default Comment;