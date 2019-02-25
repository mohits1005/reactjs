import React, { Component } from 'react';
class FeedElement extends Component {
    render() {
        const title = this.props.postData.title;
        const content = this.props.postData.content;
        return (
            <div className="post-block" >
                <h3>{title}</h3>
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}
export default FeedElement;