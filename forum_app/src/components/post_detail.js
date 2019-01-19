import React, { Component } from 'react';
import Search from './search';
import CommentsList from './comments_list';
import COMMENTS from '../comments';
class PostDetail extends Component {
    changeFilterText(value) {
        console.log('Search text: '+value);
    }
    render() {
        const { id } = this.props.match.params;
        const { postData } = this.props.location.state;
        // console.log(postData);
        return (
            <div>
                <Search changeFilterText={this.changeFilterText}/>
                <div className="container center-container ">
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
                    <CommentsList comments={COMMENTS}/>
                </div>
            </div>
        );
    }
}

export default PostDetail;
