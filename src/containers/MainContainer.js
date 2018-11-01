import { connect } from 'react-redux'
import React, { Component } from 'react';
import { fetchResults, playlistIsShown, nukeQueue, addToQueue } from "../redux/actions.js";

import PlaylistDetail from './PlaylistDetailContainer.js'
import SearchResults from './SearchResultsContainer.js'
import styled from 'styled-components'
import Input from '../components/Input.js'
import IconButton from '../components/IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


const Newd = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    padding: 10px 10px 10px 0px;
`

const ContentDiv = styled.div`
  flex: 1 1 auto;
  position: relative;/* need this to position inner content */
  overflow-y: auto;
  margin:10px;
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

class Main extends Component {
    render() {
        return (
            <ContentDiv>
                <div>
                    <HeaderDiv>
                        {this.props.playlistVisibility ?
                            (<Newd>
                                {this.props.playlist.title}
                                <IconButton onClick={() => (this.props.nukeQueue() && this.props.addToQueue(this.props.playlist.tracks))}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </IconButton>
                            </Newd>
                            )
                            : "Results"
                        }
                        <div>
                            <Input
                                handleSubmit={(r) => { this.props.fetchResults(r) && this.props.playlistIsShown(false) }}>
                                Search Youtube
                        </Input>
                        </div>
                    </HeaderDiv>

                </div>
                {this.props.playlistVisibility ?
                    <PlaylistDetail />
                    : <SearchResults />
                }
            </ContentDiv >
        )
    }
}

const mapStateToProps = state => ({
    playlistVisibility: state.playlistVisibility,
    playlist: state.playlists[state.openedPlaylist]
})
const mapDispatchToProps = { fetchResults, playlistIsShown, nukeQueue, addToQueue };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);