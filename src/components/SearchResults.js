import React from 'react';

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

import * as palette from './styleVariables.js';

const ResultsRow = styled.div`
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
    
`

const SearchResults = (props) => (
    props.results !== undefined ?
        <div>
            {props.results.map((r) => (
                <ResultsRow>
                    <div>
                        {r.title}
                    </div>

                    <select onChange={(e) => { props.addVideo(r, e.target.value); e.target.value = "add" }}>
                        <option selected="selected" disabled hidden>add</option>
                        {props.playlists.map((p, i) => (
                            <option value={i}>{p.title}</option>
                        ))}
                    </select>
                </ResultsRow>
            ))}
        </div>
        : <div>Nothing Here</div>
)


export default SearchResults