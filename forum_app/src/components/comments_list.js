import React, { Component } from 'react';
import Comment from './comment';
class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', isVisible: false};
        this.renderComment = this.renderComment.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.showAddComment = this.showAddComment.bind(this);
        this.onEditcomment = this.onEditcomment.bind(this);
    }
    onInputChange(event) {
        this.setState({ value: event.target.value });
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
        comments.push(comment);
        this.props.onAddcomment(comments);
        this.setState({ value: '' });
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
    renderComment(commentData) {
        return (
            <div key={commentData.id}>
                <Comment commentData={commentData} onEditcomment={this.onEditcomment}/>
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
