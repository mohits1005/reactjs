import React, { Component } from 'react';
import Search from './search';
import CommentsList from './comments_list';
import COMMENTS from '../comments';
class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {comments: COMMENTS};
        this.onAddcomment = this.onAddcomment.bind(this);
    }
    onAddcomment(comment){
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({ comments });
    }
    changeFilterText(value) {
        return;
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
                    <CommentsList comments={this.state.comments} onAddcomment={this.onAddcomment}/>
                </div>
            </div>
        );
    }
}

export default PostDetail;
