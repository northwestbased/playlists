import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../components/IconButton.js'

import SimpleMenu from './dropdown.js'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import styled from 'styled-components';

import * as palette from './styleVariables.js';

const Track = styled.div`
    font-size:${palette.SMALL_FONT};
    display:flex;
    padding:3px 0px;
    border-top:1px solid ${palette.BORDER_COLOR};
    align-items: center;    
    justify-content: space-between;
    div:nth-child(1), div:nth-child(2) {
        flex:2 1; 
    }
    &:nth-child(odd) {
        background:${palette.COLOR_SECONDARY}
    }
    * {
        font-size:${palette.SMALL_FONT};
    }
    > * {
        margin:0px 3px;
    }
    
`
const Title = styled.div `
    display:flex;
    font-weight:bold;
    justify-content:center;
    margin-bottom:5px;
`


const PlaylistDetail = (props) => {

    if (props.playlist === undefined) {
        return ""
    }

    return (
        <div>
            <Title><div>{props.playlist.title}</div>
            <IconButton onClick={() => (props.playVideo(props.playlist.tracks))}>
                <FontAwesomeIcon icon={faPlay} />
            </IconButton>
            </Title>
            <div>
                {
                    props.playlist.tracks.map((track, i) => (
                        <Track>
                            <div onDoubleClick={() => (props.playVideo([track]))}>{track.title}</div>
                            <div onDoubleClick={() => (props.playVideo([track]))}>{track.author}</div>
                            <SimpleMenu options={
                                [
                                    {
                                        title: "Remove Video",
                                        handler: () => props.removeVideo(i, props.openedPlaylist)
                                    },
                                ]
                            }
                            />
                        </Track>
                    ))
                }
            </div>
        </div>
    )
}

PlaylistDetail.propTypes = {
    playlist: PropTypes.object.isRequired,
    playVideo: PropTypes.func.isRequired,
    removeVideo: PropTypes.func.isRequired
};

export default PlaylistDetail