import React from 'react'
import styled from 'styled-components';

import * as palette from './styleVariables.js';

const StyledButton = styled.button`
    background:transparent;
    border:0px;
    outline:none;
    color:${palette.TEXT_COLOR}
    &:hover {
        color:${palette.HOVER_TEXT_COLOR}
    }

`

const IconButton = ({onClick, children}) => (
    <StyledButton className="bttn" onClick={onClick}>{children}</StyledButton>
)

export default IconButton