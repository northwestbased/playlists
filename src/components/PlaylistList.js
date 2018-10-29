import React from 'react';
import styled from 'styled-components'

import { connect } from "react-redux";
import { openPlaylist, createPlaylist, deletePlaylist} from "../redux/actions.js";
import Input from './Input.js'

const StyleDiv = styled.div`
    padding:10px;
    background:#ddd;
    height:100%;
`

const PlaylistList = (props) => (
    <StyleDiv>
        <Input handleSubmit={props.createPlaylist}>Add A Playlist</Input>

        {props.playlists.map((p, i) => (
            <div><div onClick={() => props.openPlaylist(i)}>{p.title}</div> <button onClick={() => props.deletePlaylist(i)}>DELETE</button></div>
        ))}

    </StyleDiv>
)

const mapDispatchToProps = { openPlaylist, createPlaylist, deletePlaylist };

export default connect(
    state => ({ playlists: state.playlists }),
    mapDispatchToProps
)(PlaylistList);

