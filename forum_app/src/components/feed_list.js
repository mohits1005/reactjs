import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        const link = "/detail/" + postData.id;
        return (
            <Link to={{ pathname: link, state: {postData}}} key={id} >
                <div className="post-block">
                    <h3>{title}</h3>
                    <div className="category">
                        {category}
                    </div>
                    <div className="content">
                        {content}
                    </div>
                </div>
            </Link>
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
