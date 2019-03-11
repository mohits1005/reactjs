import React, { Component } from 'react';
import FeedElement from './feed_element';
import { Row, Column } from './responsive';
import styles from '../styles/styles.css';
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
                <Row style={styles.center_container}>
                    <Column sm="6" xs="12" center>
                        {lists}
                     </Column>
                </Row>
        );
    }
}
export default FeedList;
