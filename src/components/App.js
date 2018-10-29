import React, { Component } from 'react';
import PlaylistList from './PlaylistList.js'
import PlaylistDetail from './PlaylistDetail.js'
import Input from './Input.js'

import YouTube from 'react-youtube';

import { connect } from "react-redux";
import { addVideo, playVideo, openPlaylist, createPlaylist, fetchResults } from "../redux/actions.js";
import { ThemeProvider } from 'styled-components';


class App extends Component {



  render() {
    return (
      <div className="App">
        <PlaylistList />
        <Input handleSubmit={(r) => this.props.fetchResults(r)}>Fetch Those Results!</Input>


        {this.props.state.results.results ? this.props.state.results.results.map(r => <div>{r.title}<br />{r.description}</div>) : ""}
        <main>
          <PlaylistDetail />
          <div className="video">
            <YouTube
              videoId={this.props.state.nowPlaying}
            />
          </div>
        </main>
      </div>
    );
  }
}


const mapDispatchToProps = { addVideo, playVideo, openPlaylist, createPlaylist, fetchResults };

export default connect(
  state => ({state}),
  mapDispatchToProps
)(App);