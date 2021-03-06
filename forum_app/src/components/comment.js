import React, { Component } from 'react';
import Reply from './reply';
import MyContext from './context';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { editCommentId: -1, addReplyCommentId: -1, editReplyId: -1 }
        this.toggleEditComment = this.toggleEditComment.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleEditReply = this.toggleEditReply.bind(this);
    }
    toggleEditComment(id) {
        this.setState({ editCommentId: id});
    }
    toggleEditReply(commentId, replyId) {
        if (commentId === -1) {
            this.setState({ editCommentId: -1, editReplyId: -1 })
        }
        else
            this.setState({ editCommentId: commentId, editReplyId: replyId })
    }
    renderReplies(replyData, commentId) {
        const { id } = replyData;
        const { editCommentId, editReplyId } = this.state;
        return (
            <div key={id}>
                <Reply replyData={replyData} commentId={commentId} editCommentId={editCommentId} editReplyId={editReplyId} toggleEditReply={this.toggleEditReply}/>
            </div>
        );
    }
    toggleReply(id){
        this.setState({ addReplyCommentId: id});
    }
    render() {
        const { id, userId, text, userName, replies } = this.props.commentData;
        const { editCommentId, editReplyId }= this.state;
        const editCommentText =
            <div className="edit-comment-wrap" onClick={() => this.toggleEditComment(id, text)} >
                <div className="edit-comment-text">Edit</div>
            </div>;
        let showEditCommentInput;
        if (userId === 10 && id === editCommentId)
        {
            showEditCommentInput = 
                <EditCommentInput text={text} toggleEditComment={this.toggleEditComment} editCommentId={editCommentId}>
                </EditCommentInput>;
        }
        const addReplyCommentId = this.state.addReplyCommentId;
        let showAddReplyInput;
        if (id === addReplyCommentId) {
            showAddReplyInput =
                <AddReplyInput id={id} toggleReply={this.toggleReply} replies={replies}>
            </AddReplyInput>;
        }
        return (
            <div>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    <div>
                        {(id !== editCommentId || editReplyId !== -1) && text }
                        {editReplyId === -1 && showEditCommentInput}
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
        this.saveEditComment = this.saveEditComment.bind(this);
    }
    onInputChange(event) {
        this.setState({ editCommentValue: event.target.value });
    }
    saveEditComment(editCommentValue, context) {
        const id = this.props.editCommentId;
        const val = editCommentValue;
        const comments = context.state.comments;
        const new_comments = [];
        comments.forEach(comment => {
            let data = comment;
            if (comment.id === id) {
                data.text = val;
            }
            new_comments.push(data);
        });
        context.onEditcomment(new_comments);
        this.props.toggleEditComment(-1);
    }
    render() {
        const editCommentValue = this.state.editCommentValue;
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (context) => (
                            <div className="save-comment-wrap">
                                <input type="text" className="form-control" value={editCommentValue} onChange={this.onInputChange} />
                                <div className="save-comment-text" onClick={() => this.saveEditComment(editCommentValue, context)}>Save</div>
                                <div className="cancel-comment-text" onClick={() => this.props.toggleEditComment(-1)}>Cancel</div>
                            </div>
                        )
                    }
                </MyContext.Consumer>
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
    saveNewReply(context) {
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

        const comments = context.state.comments;
        const new_comments = [];
        comments.forEach(comment => {
            let data = comment;
            if (comment.id === commentId) {
                if (data.replies === undefined || data.replies.length === 0) {
                    data.replies = [reply];
                }
                else {
                    data.replies.push(reply);
                }
            }
            new_comments.push(data);
        });
        context.onAddReply(new_comments);

        this.props.toggleReply(-1);
    }
    render() {
        const value = this.state.value;
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <div className="add-new-reply">
                            <input type="text" className="form-control" placeholder="Add Reply here.." value={value} onChange={this.addNewReplyOnchange} />
                            <div className="save-reply-text" onClick={() => this.saveNewReply(context)}>Save</div>
                            <div className="cancel-reply-text" onClick={() => this.props.toggleReply(-1)}>Cancel</div>
                        </div>
                    )}
            </MyContext.Consumer>
        )
    }
}
export default Comment;