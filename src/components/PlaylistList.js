import React from 'react';

import Input from './Input.js'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

import * as palette from './styleVariables.js';


const PL = styled.div`
    font-size:${palette.SMALL_FONT};
    display:flex;
    padding:3px 0px;
    border-top:1px solid ${palette.BORDER_COLOR};
    align-items: center;    
    justify-content: space-between;
    &:nth-child(odd) {
        background:${palette.COLOR_SECONDARY}
    }
    * {
        font-size:${palette.SMALL_FONT};
    }
    > * {
        margin:0px 3px;
    }
    > div:first-child {
        flex-grow:1;
    }
    
`


const PlaylistList = (props) => (
    <div>
        <Input handleSubmit={props.createPlaylist}>
            Create Playlist
            <FontAwesomeIcon icon={faPlus} />
        </Input>

        {props.playlists.map((p, i) => (
            <PL>
                <div onClick={() => {
                    props.openPlaylist(i)
                    props.playlistIsShown(true)
                }}>
                    {p.title}
                </div>
                <IconButton onClick={() => props.deletePlaylist(i)}><FontAwesomeIcon icon={faTimes} /></IconButton>
            </PL>
        ))}

    </div>
)

export default PlaylistList