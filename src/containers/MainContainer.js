import { connect } from 'react-redux'
import React, { Component } from 'react';
import { fetchResults, playlistIsShown, playVideo } from "../actions/actions.js";

import PlaylistDetail from './PlaylistDetailContainer.js'
import SearchResults from './SearchResultsContainer.js'
import Input from '../components/Input.js'
import Player from '../containers/PlayerContainer.js'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Header = styled.div`
    display:flex;
    justify-content:flex-end;
`

const StyledMain = styled.div`
    overflow-y:auto;
    height:100%;
`

class Main extends Component {
    render() {
        return (
            <StyledMain>
                <Header>
                    <Input
                        handleSubmit={(r) => {
                            this.props.fetchResults(r)
                            this.props.playlistIsShown(false)
                        }}
                    >
                        Search Youtube
                        <FontAwesomeIcon icon={faSearch} />
                    </Input>
                </Header>
                <Player />
                {this.props.playlistVisibility ?
                    <PlaylistDetail />
                    : <SearchResults />}
            </StyledMain >
        )
    }
}

const mapStateToProps = state => ({
    playlistVisibility: state.playlistVisibility,
    playlist: state.playlists[state.openedPlaylist]
})
const mapDispatchToProps = { fetchResults, playlistIsShown, playVideo };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);