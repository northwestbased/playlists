import React from 'react';
import styled from 'styled-components'

import { connect } from "react-redux";
import { openPlaylist, createPlaylist, deletePlaylist } from "../redux/actions.js";
import Input from './Input.js'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const StyleDiv = styled.div`
    padding:10px;
    height:100%;
`
const SearchResult = styled.div`
    margin-top:10px;
    display:flex;
    justify-content:space-between;
    .bttn {
        display:none;
    }
    &:hover .bttn {
        display:block;
    }
`

const PlaylistList = (props) => (
    <StyleDiv>
        <Input handleSubmit={props.createPlaylist}>Add A Playlist</Input>

        {props.playlists.map((p, i) => (
            <SearchResult>
                <div onClick={() => props.openPlaylist(i)}>{p.title}</div>
                <IconButton onClick={() => props.deletePlaylist(i)}><FontAwesomeIcon icon={faTimes} /></IconButton>
            </SearchResult>
        ))}

    </StyleDiv>
)

const mapDispatchToProps = { openPlaylist, createPlaylist, deletePlaylist };

export default connect(
    state => ({ playlists: state.playlists }),
    mapDispatchToProps
)(PlaylistList);

