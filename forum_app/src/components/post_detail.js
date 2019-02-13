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
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
class PostDetail extends Component {
    constructor(props){
        super(props);
        // this.state = {comments: COMMENTS};
        this.onAddcomment = this.onAddcomment.bind(this);
        this.onEditcomment = this.onEditcomment.bind(this);
        this.onAddReply = this.onAddReply.bind(this);
        this.onEditReply = this.onEditReply.bind(this);
    }
    onAddcomment(comments){
        // this.setState({ comments });
    }
    changeFilterText(value) {
        return;
    }
    onEditcomment(comments){
        // this.setState({ comments});
    }
    onEditReply(comments) {
        // this.setState({ comments });
    }
    onAddReply(comments) {
        // this.setState({ comments });
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
                            <CommentsList onAddcomment={this.onAddcomment} onEditcomment={this.onEditcomment} onAddReply={this.onAddReply} onEditReply={this.onEditReply}/>
                        </div>
                    </div>
                </MyProvider>
            </div>
        );
    }
}

export default PostDetail;
