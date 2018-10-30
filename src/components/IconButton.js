import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.form`
    background:transparent;
    border:0px;
    padding:0px;
    margin:0px;
`
const IconButton = ({onClick, children}) => (
    <StyledButton className="bttn" onClick={onClick}>{children}</StyledButton>
)

export default IconButton