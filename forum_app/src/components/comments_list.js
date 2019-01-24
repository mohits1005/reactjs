import React, { Component } from 'react';
class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', isVisible: false };
        this.renderComment = this.renderComment.bind(this);
        this.renderReplies = this.renderReplies.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.showAddComment = this.showAddComment.bind(this);
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
        this.props.onAddcomment(comment);
    }
    renderReplies(repliesData){
        const { id, text, userName } = repliesData;
        return (
            <div key={id}>
                <div className="comment-wrap">
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
            </div>
        );
    }
    renderComment(commentData) {
        const { id, text, userName, replies} = commentData;
        return (
            <div key={id}>
                <div className="comment-wrap">
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
                <div className="replies-wrap">
                    { replies.map(this.renderReplies) }
                </div>
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
            <div className="input-wrap">
                <form className="add-input-form" onSubmit={this.onFormSubmit}>
                    <input className="add-comment-input form-control" type="text" placeholder="Add Comment..." onChange={this.onInputChange} value={this.state.value} />
                    <button type="submit" className="add-comment-btn">POST</button>
                </form>
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
