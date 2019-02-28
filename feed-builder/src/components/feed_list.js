import React, { Component } from 'react';
import FeedElement from './feed_element';
class FeedList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const posts = this.props.posts;
        var lists = posts.map(function (postData, index) {
            return (
                <FeedElement postData={postData} key={index}>
                </FeedElement>
            )
        });
        return (
                <div className="col-sm-6 col-xs-12 feed-list-container center-container">
                    <div className="row">
                        {lists}
                     </div>
                </div>
        );
    }
}
export default FeedList;
