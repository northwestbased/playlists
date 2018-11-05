import React from 'react';

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

const NothingDiv = styled.div`
    height:100%;
    display:flex;
    height:90%;
    justify-content: center;
    align-items: center;
    overflow:hidden;
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
        : <NothingDiv><div>Nothing Here. Create a playlist and add videos by searching for them.</div></NothingDiv>
)


export default SearchResults