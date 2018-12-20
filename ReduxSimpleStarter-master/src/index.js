import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDdXsYvX0OIKblBypD5IZMlO5OtIk1v8sQ';
// const App = () => {
//     return (<div><SearchBar /></div>);
// }
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null
        };
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            // console.log(data);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        })
    }
    render(){
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </div>
        );
    }
}
ReactDom.render(<App />, document.querySelector('.container'));
