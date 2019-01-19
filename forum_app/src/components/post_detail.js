import React, { Component } from 'react';
import Search from './search';
import CommentsList from './comments_list';
import COMMENTS from '../comments';
class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = { value: '', comments: COMMENTS };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({ value: event.target.value });
    }
    changeFilterText(value) {
        console.log('Search text: '+value);
    }
    onFormSubmit(event){
        event.preventDefault();
        const comments = this.state.comments;
        const id = COMMENTS.length+1;
        const userId = 10;
        const userName = 'Anonymous';
        const text = this.state.value;
        const replies = [];
        const comment = {id, userId, userName, text, replies};
        comments.push(comment);
        this.setState({comments});
    }
    render() {
        // const { id } = this.props.match.params;
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
                    <CommentsList comments={this.state.comments}/>
                    <div className="input-wrap">
                        <form className="add-input-form" onSubmit={this.onFormSubmit}>
                            <input className="add-comment-input form-control" type="text" placeholder="Add Comment..." onChange={this.onInputChange}/>
                            <button type="submit" className="add-comment-btn">POST</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostDetail;
