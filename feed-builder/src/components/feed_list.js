import React, { Component } from 'react';
import FeedElement from './feed_element';
class FeedList extends Component {
    constructor(props) {
        super(props);
        this.renderPost = this.renderPost.bind(this);
    }
    renderPost(postData) {
        return (
            <FeedElement postData={postData} key={postData.id}/>
        );
    }
    render() {
        const posts = this.props.posts;
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-md-8 center-container">
                    {posts.map(this.renderPost)}
                </div>
            </div>
        );
    }
}
export default FeedList;
