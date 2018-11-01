import React, { Component } from 'react';
import PlaylistList from '../containers/PlaylistListContainer.js'
import Input from './Input.js'
import Player from '../containers/PlayerContainer.js'
import Main from '../containers/MainContainer.js'

import { connect } from "react-redux";
import { fetchResults, playlistIsShown } from "../redux/actions.js";
import styled from 'styled-components'

const AppDiv = styled.div`
  height:100%;
  display:flex;M
`
const Gutter = styled.div`
  width:300px;
  border-right:1px solid #bbb;
  box-sizing:border-box;
`
const MainD = styled.div`
  display: flex;
  flex-grow:1;
  flex-direction: column;
`
const Nav = styled.div`
  display:flex;
  flex: 0 0 auto;
  margin:10px;
  > div {
    width:50%;
  }
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
        <MainD>
          <Main>
            <div>
              <div>

              </div>
              <div>
                <Input 
                  handleSubmit={(r) => { this.props.fetchResults(r) && this.props.playlistIsShown(false) }}>
                  Search Youtube
                </Input>
              </div>
            </div>
          </Main>
          <Footer>
            <Player />
          </Footer>
        </MainD>
      </AppDiv>
    );
  }
}


const mapDispatchToProps = { fetchResults, playlistIsShown };

export default connect(
  state => ({ state }),
  mapDispatchToProps
)(App);