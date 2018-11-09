import { connect } from 'react-redux'
import React, { Component } from 'react';
import { fetchResults, playlistIsShown, playVideo, deletePlaylist } from "../actions/actions.js";

import PlaylistDetail from './PlaylistDetailContainer.js'
import SearchResults from './SearchResultsContainer.js'
import Input from '../components/Input.js'
import Player from '../containers/PlayerContainer.js'
import styled from 'styled-components';
import IconButton from '../components/IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'

const StyledMain = styled.div`
    overflow-y:auto;
    height:100%;
    display:flex;
    flex-direction:column;  
`

const Header = styled.div`
    display:flex;
    justify-content:flex-end;
`
const Middle = styled.div`
    flex:1;
    overflow: auto;
`

const Footer = styled.div`
    
`




const FIRSTCHILD = styled.div`
    margin:auto;
    > div {
        display:flex;
    }
`

const LASTCHILD = styled.div`
`

class Main extends Component {
    render() {
        return (
            <StyledMain>
                <Header>
                    <FIRSTCHILD>
                        {this.props.playlistVisibility && this.props.playlist !== undefined ?
                            <div>
                                <div>{this.props.playlist.title}</div>
                                <IconButton onClick={() => (this.props.playVideo(this.props.playlist.tracks))}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </IconButton>
                                <IconButton onClick={() => {
                                    console.log("openedPlaylist", this.props.openedPlaylist)
                                    this.props.deletePlaylist(this.props.openedPlaylist)
                                }}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </IconButton>
                            </div>
                            : <div>search results for {this.props.keyword}</div>


                        }



                    </FIRSTCHILD>
                    <LASTCHILD>
                        <Input
                            handleSubmit={(r) => {
                                this.props.fetchResults(r)
                                this.props.playlistIsShown(false)
                            }}
                        >
                            Search Youtube
                            <FontAwesomeIcon icon={faSearch} />
                        </Input>
                    </LASTCHILD>
                </Header>
                <Middle>
                    {this.props.playlistVisibility ?
                        <PlaylistDetail />

                        : <SearchResults />}
                </Middle>
                <Footer>
                    <Player />
                </Footer>
            </StyledMain >
        )
    }
}

const mapStateToProps = state => {
    return {
        playlistVisibility: state.playlistVisibility,
        playlist: !isNaN(state.openedPlaylist) ? state.playlists[state.openedPlaylist] : undefined,
        openedPlaylist: state.openedPlaylist,
        keyword: state.results.keyword
    }
}
const mapDispatchToProps = { fetchResults, playlistIsShown, playVideo, deletePlaylist };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);