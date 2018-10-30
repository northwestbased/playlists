import React, { Component } from 'react';
import styled from 'styled-components'

import { connect } from "react-redux";
import { removeFromQueue } from "../redux/actions.js";
import Input from './Input.js'
import YouTube from 'react-youtube';

const EmbedContainer = styled.div`
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden; 
    max-width: 100%;
    iframe {
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
    }
`







class Player extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div style={{"max-width":"300px"}}>
            <EmbedContainer>
                {this.props.queue !== undefined && this.props.queue.length ? (
                    <YouTube
                        videoId={this.props.queue[0].id}
                        onEnd={() => (this.props.removeFromQueue() && this.forceUpdate())}
                        opts={{ playerVars: { 'autoplay': 1 } }}
                    />
                ) : undefined}
            </EmbedContainer></div>
        )
    }
}

const mapDispatchToProps = { removeFromQueue };

export default connect(
    state => ({ queue: state.queue }),
    mapDispatchToProps
)(Player);

