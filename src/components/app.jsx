import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this._videoSearch('Nissan GTR 2017');
  }

  _videoSearch(term) {
    YTSearch({
      key: this.props.apiKey,
      term: term
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // only call _videoSearch method after 800ms
    const videoSearch = _.debounce((term) => {this._videoSearch(term)}, 800);

    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}
