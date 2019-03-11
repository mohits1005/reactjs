const styles = {
    add_post_btn:{
        position: 'fixed !important',
        float: 'right',
        marginRight: '3em',
        right: '0px',
        fontSize: '17px',
        backgroundColor: '#4CAF50',
        color: '#ffffff',
        borderColor: '#4CAF50',
        display: 'inline-block',
        padding: '8px 16px',
        verticalAlign: 'middle',
        overflow: 'hidden',
        textAlign: 'center',
        cursor: 'pointer',
        whitespace: 'nowrap'
    },
    main_container: {
        marginTop: '3em',
        fontFamily: 'sans-serif' ,
        WebkitFontSmoothing: 'antialiased'
    },
    post_block: {
        fontSize: '14px',
        border: 'solid 2px #e7e7e7',
        borderTop: 'solid 1px #e7e7e7',
        borderBottom: 'solid 1px #e7e7e7',
        padding: '20px',
    },
    post_block_user_name: {
        fontWeight: 'bold',
        marginRight: '10px',
    },
    post_block_user_wrap: {
        display: 'flex',
        marginBottom: '10px',
    },
    post_block_timestamp: {
        color: '#b8b8b8',
    },
    post_block_title: {
        marginBottom: '10px',
    },
    post_block_user_image_wrap: {
        padding: '0px',
    },
    post_block_content_wrap: {
        paddingTop: '10px',
    },
    post_block_user_image: {
        height: '40px',
        width: '40px',
    },
    center_container:{
        float: 'none !important',
        margin: '0 auto !important'
    }
}
export default styles;