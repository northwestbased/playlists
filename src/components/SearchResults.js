import React from 'react';
import styled from 'styled-components'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SearchResults = (props) => (
    <div>
        {props.results !== undefined ?
            <div>
                {props.results.map((r) => (
                    <div>
                        <IconButton onClick={() => (props.nukeQueue() && props.addToQueue([r]))}>
                            <FontAwesomeIcon icon={faPlay} />
                        </IconButton>

                        {r.title}
                        <select onChange={(e) => { props.addVideo(r, e.target.value); e.target.value = "add" }}>
                            <option selected="selected" disabled hidden>add</option>
                            {props.playlists.map((p, i) => (
                                <option value={i}>{p.title}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
            : ""
        }
    </div>
)

export default SearchResults