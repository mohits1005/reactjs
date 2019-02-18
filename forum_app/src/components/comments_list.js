import React, { Component } from 'react';
import Comment from './comment';
import MyContext from './context';
class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
        this.renderComment = this.renderComment.bind(this);
        this.showAddComment = this.showAddComment.bind(this);
    }
    renderComment(commentData, context) {
        return (
            <div key={commentData.id}>
                <Comment commentData={commentData}/>
            </div>
        );
    }
    showAddComment() {
        this.setState({ isVisible: true });
    }
    render() {
        // const comments = this.props.comments;
        // const comments_count = comments.length;
        // const comments_string = comments_count > 0 ? 'There are '+comments_count + ' Comments ':'';
        // const comments_string = 'There are 0 Comments:';
        const comments_string = (comments) => {
            const comments_count = comments.length;
            const string = comments_count > 0 ? 'There are ' + comments_count + ' Comments ' : '';
            return string;
        }
        let addinput;
        if (this.state.isVisible) {
            addinput = <AddCommentInput />
        }
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (context) => (
                            <div className="row">
                                <div className="col-xs-12 col-sm-10 col-md-8 comments-container">
                                    <div className="comments-count">
                                        {comments_string(context.state.comments)}
                                        <span className="add-comment" onClick={this.showAddComment}>
                                            ADD YOURS
                                            </span>
                                    </div>
                                    {context.state.comments.map(this.renderComment)}
                                </div>
                            </div>
                        )
                    }
                </MyContext.Consumer>
                {addinput}
            </div>
        );
    }
}
class AddCommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onAddBtnClicked = this.onAddBtnClicked.bind(this);
    }
    onInputChange(event) {
        this.setState({ value: event.target.value });
    }
    onAddBtnClicked(context) {
        const text = this.state.value;;
        const comments = context.state.comments;
        const id = comments.length + 1;
        const userId = 10;
        const userName = 'Anonymous';
        const replies = [];
        const comment = { id, userId, userName, text, replies };
        comments.push(comment);
        context.onAddcomment(comments);
        this.setState({ value: '' });
    }
    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <div className="add-input-wrap">
                            <hr />
                            <div className="input-wrap">
                                <form className="add-input-form">
                                    <input className="add-comment-input form-control" type="text" placeholder="Add Comment..." onChange={this.onInputChange} value={this.state.value} />
                                    <button type="button" className="add-comment-btn" onClick={() => this.onAddBtnClicked(context)}>POST</button>
                                </form>
                            </div>
                        </div>
                    )}
            </MyContext.Consumer>

        )
    }
}

export default CommentsList;
