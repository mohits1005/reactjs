import React, { Component } from 'react';
import Parser from 'html-react-parser';
import styles from '../styles/styles.css';
import { Row, Column } from './responsive';
class FeedElement extends Component {
    render() {
        const { title, content, user_image, usr, timestamp} = this.props.postData;
        return (
            <div style={styles.post_block}>
                <Row>
                    <Column sm="1" xs="12">
                        <img src={user_image} style={styles.post_block_user_image}/>
                    </Column>
                    <Column sm="11" xs="12">
                        <div style={styles.post_block_user_wrap}>
                            <div style={styles.post_block_user_name} >{usr}</div>
                            <div style={styles.post_block_timestamp} >{timestamp}</div>
                        </div>
                        <div style={styles.post_block_title}>
                        {title}
                        </div>
                        <div className="content" >
                            {Parser(content)}
                        </div>
                    </Column>
                </Row>
            </div>
        )
    }
}
export default FeedElement;