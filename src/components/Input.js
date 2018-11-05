import React, { Component } from 'react'
import styled from 'styled-components';
import * as palette from './styleVariables.js';

const StyledForm = styled.form`
    display:flex;
    button {
        background: ${palette.COLOR_SECONDARY}
        color: ${palette.TEXT_COLOR}
    }

    button, input {
        border:0px;
        padding:10px;
    }
    button:hover {
        color:white;
    }
`


class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(event) {
        event.preventDefault();
        let value = this.state.value.trim()
        if (value.length) {
            this.props.handleSubmit(this.state.value)
        }
        this.setState({ value: "" })
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <StyledForm onSubmit={this.onSubmit}>
                <input type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder={this.props.children[0]}
                />
                <button type="submit">{this.props.children[1]}</button>
            </StyledForm>
        );
    }
}


export default Input
