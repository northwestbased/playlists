import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import * as palette from './styleVariables.js';
import PlaylistList from '../containers/PlaylistListContainer.js'
import MainContainer from '../containers/MainContainer.js'

const StyledApp = styled.div`
  height:100%;
  display:flex;
  background-color: ${palette.COLOR_PRIMARY}
  color: ${palette.TEXT_COLOR}
`

const Gutter = styled.div `
  max-width:300px;
  border-right:1px solid ${palette.BORDER_COLOR}
`
const Main = styled.div`
  flex-grow:1;
`

class App extends Component {
  render() {
    return (
      <StyledApp className="app">
        <Gutter>
          <PlaylistList />
        </Gutter>
        <Main>
          <MainContainer />
        </Main>
      </StyledApp>
    );
  }
}


const mapDispatchToProps = {  };

export default connect(
  state => ({ state }),
  mapDispatchToProps
)(App);