import React, { Component } from 'react';
class FeedList extends Component {
    constructor(props) {
        super(props);
        this.renderPost = this.renderPost.bind(this);
    }
    renderPost(postData){
        const id = postData.id;
        const category = postData.category;
        const title = postData.title;
        const content = postData.content;
        return (
            <div key={id} className="post-block">
                <h3>{title}</h3>
                <div className="category">
                    {category}
                </div>
                <div>
                    {content}
                </div>
            </div>
        );
    }
    render() {
        const posts = this.props.posts;
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-md-8 center-container">
                    { posts.map(this.renderPost) }
                </div>
            </div>
        );
    }
}

export default FeedList;
