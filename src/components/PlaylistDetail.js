import React from 'react';
import styled from 'styled-components'

import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Track = styled.div`
    margin:2px 0px;
    display:flex;
    justify-content:space-between;
`
const PlaylistDetail = (props) => {
    if (props.playlist === undefined) {
        return ""
    }

    return (
        <div>
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

export default PlaylistDetail
