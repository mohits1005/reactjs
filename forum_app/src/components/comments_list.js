import React, { Component } from 'react';
import Comment from './comment';
class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false};
        this.renderComment = this.renderComment.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.showAddComment = this.showAddComment.bind(this);
        this.onEditcomment = this.onEditcomment.bind(this);
        this.onAddReply = this.onAddReply.bind(this);
    }
    onFormSubmit(text) {
        const comments = this.props.comments;
        const id = comments.length + 1;
        const userId = 10;
        const userName = 'Anonymous';
        const replies = [];
        const comment = { id, userId, userName, text, replies };
        comments.push(comment);
        this.props.onAddcomment(comments);
    }
    onEditcomment(editedComment){
        const comments = this.props.comments;
        const new_comments = [];
        comments.forEach(comment => {
            let data = comment;
            if (comment.id === editedComment.id) {
                data.text = editedComment.val;
            }
            new_comments.push(data);
        });
        this.props.onEditcomment(new_comments);
    }
    onAddReply(reply){
        const commentId = reply.commentId;
        const comments = this.props.comments;
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
        this.props.onAddReply(new_comments);
    }
    renderComment(commentData) {
        return (
            <div key={commentData.id}>
                <Comment commentData={commentData} onEditcomment={this.onEditcomment} onAddReply={this.onAddReply}/>
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
        let addinput;
        if (this.state.isVisible)
        {
            addinput = <AddCommentInput onFormSubmit={this.onFormSubmit}/> 
        }
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
                {addinput}
            </div>
        );
    }
}
class AddCommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({ value: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        const text = this.state.value;;
        this.props.onFormSubmit(text);
        this.setState({value:''});
    }
    render() {
        return (
            <div className="add-input-wrap">
                <hr />
                <div className="input-wrap">
                    <form className="add-input-form" onSubmit={this.onFormSubmit}>
                        <input className="add-comment-input form-control" type="text" placeholder="Add Comment..." onChange={this.onInputChange} value={this.state.value} />
                        <button type="submit" className="add-comment-btn">POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentsList;
