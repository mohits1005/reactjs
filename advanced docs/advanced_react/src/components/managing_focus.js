import React from 'react';
function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class ManagingFocus extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        // Now you can set focus when required.
        this.inputElement.current.focus();
    }
    render() {
        
        return (
            <CustomTextInput inputRef={this.inputElement} />
        );
    }
}
export default ManagingFocus;