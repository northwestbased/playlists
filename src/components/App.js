import React, { Component } from 'react';
import PlaylistList from './PlaylistList.js'
import PlaylistDetail from './PlaylistDetail.js'
import Input from './Input.js'
import Results from './SearchResults.js'
import Player from './Player.js'


import { connect } from "react-redux";
import { addVideo, playVideo, openPlaylist, createPlaylist, fetchResults } from "../redux/actions.js";
import styled from 'styled-components'

const AppDiv = styled.div`
  height:100%;
  display:flex;
`

const Gutter = styled.div`
  width:300px;
  border-right:1px solid #bbb;
  box-sizing:border-box;
`

const Main = styled.div`
  display: flex;
  flex-grow:1;
  flex-direction: column;
`
const Nav = styled.div`
  flex: 0 0 auto;
  margin:10px;
`

const ContentDiv = styled.div`
  flex: 1 1 auto;
  position: relative;/* need this to position inner content */
  overflow-y: auto;
  margin:10px;

`

const Footer = styled.div`
  flex: 0 0 auto;
`

class App extends Component {
  render() {
    return (
      <AppDiv className="app">
        <Gutter>
          <PlaylistList />
        </Gutter>
        <Main>

            <Nav>
              <Input handleSubmit={(r) => this.props.fetchResults(r)}>Search Youtube</Input>
            </Nav>
            <ContentDiv>
              <PlaylistDetail />
              <Results />
            </ContentDiv>
            <Footer>
              <Player />
            </Footer>
        </Main>
      </AppDiv>
    );
  }
}


const mapDispatchToProps = { addVideo, playVideo, openPlaylist, createPlaylist, fetchResults };

export default connect(
  state => ({ state }),
  mapDispatchToProps
)(App);