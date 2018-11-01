import React from 'react';
import styled from 'styled-components'

import Input from './Input.js'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const StyleDiv = styled.div`
    padding:10px;
    height:100%;
`
const SearchResult = styled.div`
    padding:5px;
    display:flex;
    justify-content:space-between;
    .bttn {
        display:none;
    }
    &:hover .bttn {
        display:block;
    }
    > div {
        flex-grow:1;
    }
`

const PlaylistList = (props) => (
    <StyleDiv>
        <Input handleSubmit={props.createPlaylist}>Add A Playlist</Input>

        {props.playlists.map((p, i) => (
            <SearchResult>
                <div onClick={() => {props.openPlaylist(i) && props.playlistIsShown(true)}}>{p.title}</div>
                <IconButton onClick={() => props.deletePlaylist(i)}><FontAwesomeIcon icon={faTimes} /></IconButton>
            </SearchResult>
        ))}

    </StyleDiv>
)

export default PlaylistList