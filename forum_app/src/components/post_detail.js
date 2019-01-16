import React, { Component } from 'react';
class PostDetail extends Component {
    render() {
        const { id } = this.props.match.params;
        const { postData } = this.props.location.state;
        // console.log(postData);
        return (
            <div>
                <div>
                    Post ID : {id}
                </div>
                <div>
                    Post Title : {postData.title}
                </div>
                <div>
                    Post Category : {postData.category}
                </div>
                <div>
                    Post Content : {postData.content}
                </div>
            </div>
        );
    }
}

export default PostDetail;
