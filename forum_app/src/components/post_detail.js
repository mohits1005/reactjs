import React, { Component } from 'react';
import Search from './search';
import CommentsList from './comments_list';
import COMMENTS from '../comments';
import MyContext from './context';
class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: COMMENTS };
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                onAddcomment: (comments) => {
                    this.setState({ comments });
                },
                onEditcomment: (comments) => {
                    this.setState({ comments});
                },
                onAddReply: (comments) => {
                    this.setState({ comments });
                },
                onEditReply: (comments) => {
                    this.setState({ comments });
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
class PostDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { postData } = this.props.location.state;
        return (
            <div>
                <MyProvider>
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
                            <CommentsList/>
                        </div>
                    </div>
                </MyProvider>
            </div>
        );
    }
}

export default PostDetail;
