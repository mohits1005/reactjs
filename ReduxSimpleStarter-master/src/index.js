import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDdXsYvX0OIKblBypD5IZMlO5OtIk1v8sQ';
YTSearch({key:API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
})
const App = () => {
    return (<div><SearchBar /></div>);
}
ReactDom.render(<App />, document.querySelector('.container'));
