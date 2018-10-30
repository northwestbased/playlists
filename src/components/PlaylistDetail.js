import React from 'react';
import styled from 'styled-components'

import { connect } from "react-redux";
import { addVideo, playVideo, removeVideo, addToQueue, nukeQueue } from "../redux/actions.js";
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Track = styled.div`
    margin:2px 0px;
    display:flex;
    justify-content:space-between;
`
const PlaylistList = (props) => {
    if (props.playlist === undefined) {
        return ""
    }

    return (
        <div>
            <div>
                {props.playlist.title}
                <IconButton onClick={() => (props.nukeQueue() && props.addToQueue(props.playlist.tracks))}>
                    <FontAwesomeIcon icon={faPlay} />
                </IconButton>
            </div>
            <div>
                {props.playlist.tracks.map( (t, i) => (
                    <Track>
                        <div>{t.title}</div>
                        <IconButton onClick={() => props.removeVideo(i, props.openedPlaylist)}><FontAwesomeIcon icon={faTimes} /></IconButton>

                    </Track>
                ))
                }
            </div>
        </div>
    )
}


const mapDispatchToProps = { addVideo, playVideo, removeVideo, addToQueue, nukeQueue };

export default connect(
    state => ({ playlist: state.playlists[state.openedPlaylist], openedPlaylist: state.openedPlaylist }),
    mapDispatchToProps
)(PlaylistList);

