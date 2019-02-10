import React, { Component } from 'react';
import Search from './search';
import CommentsList from './comments_list';
import COMMENTS from '../comments';
class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {comments: COMMENTS};
        this.onAddcomment = this.onAddcomment.bind(this);
        this.onEditcomment = this.onEditcomment.bind(this);
        this.onAddReply = this.onAddReply.bind(this);
        this.onEditReply = this.onEditReply.bind(this);
    }
    onAddcomment(comments){
        this.setState({ comments });
    }
    changeFilterText(value) {
        return;
    }
    onEditcomment(comments){
        this.setState({ comments});
    }
    onEditReply(editedReply) {
        const comments = this.state.comments;
        const new_comments = [];
        comments.forEach(comment => {
            let data = comment;
            if (comment.id === editedReply.commentId) {
                let replies = [];
                data.replies.forEach(reply => {
                    let new_reply = reply;
                    if (reply.id === editedReply.replyId) {
                        new_reply.text = editedReply.text
                    }
                    replies.push(new_reply);
                });
                data.replies = replies;
            }
            new_comments.push(data);
        });
        this.setState({ comments: new_comments });
    }
    onAddReply(comments) {
        this.setState({ comments });
    }
    render() {
        const { postData } = this.props.location.state;
        return (
            <div>
                <Search changeFilterText={this.changeFilterText}/>
                <div className="container center-container post-detail-container">
                    <div className="post-detail-category">
                        {postData.category}
                    </div>
                    <div className="post-detail-title">
                        {postData.title}
                    </div>
                    <div className="post-detail-content">
                        {postData.content}
                    </div>
                    <hr />
                    <CommentsList comments={this.state.comments} onAddcomment={this.onAddcomment} onEditcomment={this.onEditcomment} onAddReply={this.onAddReply} onEditReply={this.onEditReply}/>
                </div>
            </div>
        );
    }
}

export default PostDetail;
