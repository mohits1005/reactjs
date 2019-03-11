yarn init -y

yarn add react react-dom prop-types react-router-dom semantic-ui-react

yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import css-loader style-loader html-webpack-plugin webpack webpack-dev-server webpack-cli -D

touch .babelrc

touch webpack.config.js

mkdir public && cd $_
touch index.html

cd ..
mkdir src && cd $_
touch index.js

mkdir components && cd $_
touch App.js Layout.js Layout.css Home.js DynamicPage.js NoMatch.js

"scripts": {
    "start": "webpack-dev-server"
  },

yarn start
