import React, { Component } from 'react';
import Parser from 'html-react-parser';
class FeedElement extends Component {
    render() {
        const { title, content, user_image, usr, timestamp} = this.props.postData;
        return (
            <div className="post-block col-sm-12 col-xs-12" >
                <div className="row">
                    <div className="col-sm-1 col-xs-12 nogutter" >
                            <img className="user-image" src={user_image} />
                    </div>
                    <div className="col-sm-11 col-xs-12" >
                        <div className="user-wrap">
                            <div className="user-name">{usr}</div>
                            <div className="timestamp">{timestamp}</div>
                        </div>
                        <div className="title">
                        {title}
                        </div>
                        <div className="content" >
                            {Parser(content)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FeedElement;