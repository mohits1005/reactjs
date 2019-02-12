import React from 'react';
const counterContext = React.createContext({
    count: 0,
    incrementCount: () => { },
});
function IncrementCountButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <counterContext.Consumer>
            {({ count, incrementCount }) => (
                <button
                    onClick={incrementCount}
                >
                {count}
                </button>
            )}
        </counterContext.Consumer>
    );

}
export default class UpdateContextChild extends React.Component {
    constructor(props) {
        super(props);
        this.incrementCount = () => {
            this.setState({count: this.state.count+1});
        };
        this.state = {
            count: 0,
            incrementCount: this.incrementCount,
        };
    }
    render() {
        // The entire state is passed to the provider
        return (
            <counterContext.Provider value={this.state}>
                <Content />
            </counterContext.Provider>
        );
    }
}
function Content() {
    return (
        <div>
            <IncrementCountButton />
        </div>
    );
}
