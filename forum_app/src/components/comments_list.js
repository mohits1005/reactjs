import React, { Component } from 'react';
class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', isVisible: false, editCommentIndex: -1, editCommentValue: '', isReplyVisible: false, replyCommentIndex: -1, addReplyValue: '', editReplyData: {}};
        this.renderComment = this.renderComment.bind(this);
        this.renderReplies = this.renderReplies.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.showAddComment = this.showAddComment.bind(this);
        this.toggleEditComment = this.toggleEditComment.bind(this);
        this.saveEditComment = this.saveEditComment.bind(this);
        this.editCommentOnChange = this.editCommentOnChange.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.addNewReplyOnchange = this.addNewReplyOnchange.bind(this);
        this.saveNewReply = this.saveNewReply.bind(this);
        this.toggleEditReply = this.toggleEditReply.bind(this);
        this.editReplyOnChange = this.editReplyOnChange.bind(this);
        this.saveEditReply = this.saveEditReply.bind(this);
    }
    onInputChange(event) {
        this.setState({ value: event.target.value });
    }
    addNewReplyOnchange(event){
        this.setState({ addReplyValue: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        const comments = this.props.comments;
        const id = comments.length + 1;
        const userId = 10;
        const userName = 'Anonymous';
        const text = this.state.value;
        const replies = [];
        const comment = { id, userId, userName, text, replies };
        this.props.onAddcomment(comment);
        this.setState({ value: '' });
    }
    toggleEditReply(commentId, replyId, text){
        if(commentId === -1)
        {
            this.setState({ editReplyData: {} })
        }
        else
            this.setState({editReplyData:{replyId, commentId, text}})
    }
    saveEditReply() {
        const replyId = this.state.editReplyData.replyId;
        const commentId = this.state.editReplyData.commentId;
        const text = this.state.editReplyData.text;
        this.props.onEditReply({ replyId, commentId, text });
        this.toggleEditReply(-1);
    }
    editReplyOnChange(event){
        const replyId = this.state.editReplyData.replyId;
        const commentId = this.state.editReplyData.commentId;
        const text = event.target.value;
        this.setState({ editReplyData: { replyId, commentId, text } });
    }
    renderReplies(repliesData, commentId){
        const { id, userId, text, userName } = repliesData;
        const editReplyText = 
            <div className="edit-reply-text" onClick={() => this.toggleEditReply(commentId, id, text)}>
                Edit
            </div>;
        const editReplyId = this.state.editReplyData.replyId;
        const editCommentId = this.state.editReplyData.commentId;
        const editCommentText = this.state.editReplyData.text;
        const editReplyField =
            <div className="save-comment-wrap">
                <input type="text" className="form-control" value={editCommentText} onChange={this.editReplyOnChange}/>
                <div className="save-comment-text" onClick={this.saveEditReply}>Save</div>
                <div className="cancel-comment-text" onClick={() => this.toggleEditReply(-1)}>Cancel</div>
            </div>;
        return (
            <div key={id}>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    <div>
                        {(editCommentId !== commentId || id !== editReplyId) && text}
                        {editCommentId === commentId && id === editReplyId && editReplyField}
                    </div>
                    <div className="time">
                        Posted on Jan 18, 2019
                    </div>
                    {userId === 10 && (editCommentId !== commentId || id !== editReplyId) &&  editReplyText}
                </div>
            </div>
        );
    }
    toggleReply(id){
        this.setState({ replyCommentIndex: id});
    }
    toggleEditComment(id, value){
        this.setState({ editCommentIndex: id });
        if(value){
            this.setState({ editCommentValue: value });
        }
    }
    editCommentOnChange(event){
        this.setState({ editCommentValue: event.target.value });
    }
    saveEditComment(){
        const id = this.state.editCommentIndex;
        const val = this.state.editCommentValue;
        this.props.onEditcomment({id, val});
        this.toggleEditComment(-1);
    }
    saveNewReply(commentId){
        const text = this.state.addReplyValue;
        const comments = this.props.comments;
        let id = 1;
        comments.forEach(comment => {
            if (comment.id === commentId) {
                if (comment.replies !== undefined && comment.replies.length > 0) {
                    id = comment.replies.length + 1;
                }
            }
        });
        const userId = 10;
        const userName = 'Anonymous';
        const reply = { commentId, id, userId, userName, text };
        this.props.onAddReply(reply);
        this.toggleReply(-1);
    }
    renderComment(commentData) {
        const { id, userId, text, userName, replies} = commentData;
        const editComment = 
            <div className="edit-comment-wrap" onClick={() => this.toggleEditComment(id, text)}>
            <div className="edit-comment-text">Edit</div>
        </div>;
        const saveComment =
        <div className="save-comment-wrap">
                <input type="text" className="form-control" value={this.state.editCommentValue} onChange={this.editCommentOnChange}/>
            <div className="save-comment-text" onClick={this.saveEditComment}>Save</div>
            <div className="cancel-comment-text" onClick={() => this.toggleEditComment(-1)}>Cancel</div>
        </div>;
        const editCommentIndex = this.state.editCommentIndex;
        const replyCommentIndex = this.state.replyCommentIndex;
        const addReplyValue = this.state.addReplyValue;
        const comment = 
        <div className="comment-text-wrap">
            {text}
        </div>
        const addNewReply =
        <div className="add-new-reply">
                <input type="text" className="form-control" placeholder="Add Reply here.." value={addReplyValue} onChange={this.addNewReplyOnchange} />
                <div className="save-reply-text" onClick={() => this.saveNewReply(id)}>Save</div>
            <div className="cancel-reply-text" onClick={() => this.toggleReply(-1)}>Cancel</div>
        </div>
        return (
            <div key={id}>
                <div className="comment-wrap">
                    <div className="username">
                        {userName}
                    </div>
                    {id !== editCommentIndex && comment}
                    {userId === 10 && id === editCommentIndex && saveComment }
                    <div className="time">
                        Posted on Jan 18, 2019
                    </div>
                    <div className="add-reply" onClick={() => this.toggleReply(id)}>
                        Reply
                    </div>
                    {userId === 10 && id !== editCommentIndex && editComment }
                </div>
                <div className="replies-wrap">
                    {replies.map((reply) => this.renderReplies(reply, id)) }
                </div>
                {id === replyCommentIndex && addNewReply}
            </div>
        );
    }
    showAddComment(){
        this.setState({isVisible:true});
    }
    render() {
        const comments = this.props.comments;
        const comments_count = comments.length;
        const comments_string = comments_count > 0 ? 'There are '+comments_count + ' Comments ':'';
        const addinput =
            <div className="add-input-wrap">
                <hr/>
                <div className="input-wrap">
                    <form className="add-input-form" onSubmit={this.onFormSubmit}>
                        <input className="add-comment-input form-control" type="text" placeholder="Add Comment..." onChange={this.onInputChange} value={this.state.value} />
                        <button type="submit" className="add-comment-btn">POST</button>
                    </form>
                </div>
            </div>;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-8 comments-container">
                        <div className="comments-count">
                            {comments_string}
                            <span className="add-comment" onClick={this.showAddComment}>
                                ADD YOURS
                            </span>
                        </div>
                        {comments.map(this.renderComment)}
                    </div>
                </div>
                {this.state.isVisible && addinput}
            </div>
        );
    }
}

export default CommentsList;
