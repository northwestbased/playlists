import React from 'react';
import styled from 'styled-components'

import { connect } from "react-redux";
import { addVideo, playVideo, removeVideo } from "../redux/actions.js";
import Input from './Input.js'

/*const StyleDiv = styled.div`
    padding:10px;
    background:#ddd;
    height:100%;
`*/

const PlaylistList = (props) => {
    if (props.playlist === undefined) {
        return ""
    }

    return (
        <div>
            {props.playlist.title}
            <Input handleSubmit={(id) => props.addVideo({title:id, id}, props.openedPlaylist)}>Add A Youtube ID</Input>

            <div>
                {props.playlist.tracks.map( (t, i) => (
                    <div>
                        <div onClick={() => props.playVideo(t.id)}>{t.title}</div><button onClick={() => props.removeVideo(i, props.openedPlaylist)}>Remove</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


const mapDispatchToProps = { addVideo, playVideo, removeVideo };

export default connect(
    state => ({ playlist: state.playlists[state.openedPlaylist], openedPlaylist: state.openedPlaylist }),
    mapDispatchToProps
)(PlaylistList);

