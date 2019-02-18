import React, { Component } from 'react';
import MyContext from './context';
class Reply extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, userId, text, userName } = this.props.replyData;
        const { commentId, editCommentId, editReplyId} = this.props;
        const editReplyText =
            <div className="edit-reply-text" onClick={() => this.props.toggleEditReply(commentId, id)}>
                Edit
            </div>;
        let showEditReplyInput;
        if (editCommentId === commentId && id === editReplyId) {
            showEditReplyInput =
                <EditReplyInput commentId={commentId} replyData={this.props.replyData} text={text} toggleEditReply={this.props.toggleEditReply} saveEditReply={this.props.saveEditReply}>
            </EditReplyInput>;
        }
        return (
            <div>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    <div>
                        {(editCommentId !== commentId || id !== editReplyId) && text}
                        {showEditReplyInput}
                    </div>
                    <div className="time">
                        Posted on Jan 18, 2019
                    </div>
                    {userId === 10 && (editCommentId !== commentId || id !== editReplyId) && editReplyText}
                </div>
            </div>
        );
    }
}
class EditReplyInput extends Component {
    constructor(props) {
        super(props);
        this.state = { editReplyValue: props.text };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSaveEditReply = this.onSaveEditReply.bind(this);
    }
    onSaveEditReply(context){
        let { commentId, replyData } = this.props;
        replyData.text = this.state.editReplyValue;

        const comments = context.state.comments;
        const new_comments = [];
        comments.forEach(comment => {
            let data = comment;
            if (comment.id === commentId) {
                let replies = [];
                data.replies.forEach(reply => {
                    let new_reply = reply;
                    if (reply.id === replyData.replyId) {
                        new_reply.text = replyData.text
                    }
                    replies.push(new_reply);
                });
                data.replies = replies;
            }
            new_comments.push(data);
        });
        context.onEditReply(new_comments);

        this.props.toggleEditReply(-1)
    }
    onInputChange(event) {
        this.setState({ editReplyValue: event.target.value });
    }
    render() {
        const editReplyValue = this.state.editReplyValue;
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <div className="save-comment-wrap">
                            <input type="text" className="form-control" value={editReplyValue} onChange={this.onInputChange} />
                            <div className="save-comment-text" onClick={() => this.onSaveEditReply(context)}>Save</div>
                            <div className="cancel-comment-text" onClick={() => this.props.toggleEditReply(-1)}>Cancel</div>
                        </div>
                    )}
            </MyContext.Consumer>
        );
    }
}
export default Reply;