import React, { Component } from 'react';
const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(
    themes.dark // default value
);


class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{ backgroundColor: theme.background }}
            >
            {theme.background}
            </button>
        );
    }
}
ThemedButton.contextType = ThemeContext;
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

export default class DynamicContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <div >
                    <ThemedButton />
                </div>
            </div>
        );
    }
}
