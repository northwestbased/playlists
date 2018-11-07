import React, { Component } from 'react';
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YouTube from 'react-youtube';
import styled from 'styled-components';

import IconButton from '../components/IconButton.js'
import * as palette from './styleVariables.js';

const EmbedContainer = styled.div`
    max-width:400px;
    flex-grow:1;
`

const IframeContainer = styled.div`
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden; 
    max-width: 100%; 
    iframe { 
        position: absolute; 
        top: 0; left: 0; 
        width: 100%; 
        height: 100%; 
    }
`

const PlayerContainer = styled.div`
    display:flex;
    justify-content:center;

`

const ControlsContainer = styled.div`
    padding:10px;
    flex-direction: column;
    display: flex;
    justify-content: center;
`

const ButtonGroup = styled.div`
    display:flex;
    justify-content:center;
`

class Player extends Component {
    constructor() {
        super()
        this.state = {
            currentVideo: 0
        }

        this.playNext = this.playNext.bind(this)
        this.playPrevious = this.playPrevious.bind(this)
        this.play = this.play.bind(this)
        this.onPlay = this.onPlay.bind(this)
        this.onPause = this.onPause.bind(this)
        this.pause = this.pause.bind(this)
    }

    play = () => {
        this.state.player.playVideo()
    }

    pause = () => {
        this.state.player.pauseVideo()
    }

    playNext = () => {
        let len = this.props.queue.length
        let newIndex = this.state.currentVideo + 1
        if (newIndex === len) {
            return;
        } else {
            this.setState({ currentVideo: newIndex })
        }
    }
    playPrevious = () => {
        let newIndex = this.state.currentVideo - 1
        if (newIndex < 0) {
               return;
        } else {
            this.setState({ currentVideo: newIndex })
        }
    }

    _onReady = (event) => {
        // access to player in all event handlers via event.target
        this.setState({ player: event.target })
    }

    onPlay = () => {
        this.setState({ isPlaying: true })
    }

    onPause = () => {
        this.setState({ isPlaying: false })
    }

    render() {
        if (this.props.queue === undefined || !this.props.queue.length) {
            return ""
        }

        let isLastVideo = (this.props.queue.length - 1) === this.state.currentVideo
        let isFirstVideo = 0 === this.state.currentVideo

        return (
            <PlayerContainer>
                <EmbedContainer>
                    <IframeContainer>
                        {this.state.currentVideo !== undefined ? (
                            <YouTube
                                videoId={this.props.queue[this.state.currentVideo].id}
                                opts={{ playerVars: { 'autoplay': 1 } }}

                                onPlay={this.onPlay}
                                onPause={this.onPause}
                                onEnd={this.playNext}
                                onReady={this._onReady}
                            />
                        ) : ""}
                    </IframeContainer>
                </EmbedContainer>
                <ControlsContainer>
                    {this.props.queue[this.state.currentVideo].title}
                    <ButtonGroup>
                            <IconButton onClick={this.playPrevious}>
                                <FontAwesomeIcon icon={faBackward} />
                            </IconButton>
                            <IconButton onClick={this.pause}>
                                <FontAwesomeIcon icon={faPause} />
                            </IconButton>
                            <IconButton onClick={this.playNext}>
                                <FontAwesomeIcon icon={faForward} />
                            </IconButton>
                    </ButtonGroup>
                </ControlsContainer>
            </PlayerContainer>
        )
    }
}

export default Player