import React, { Component } from 'react'
import styled from 'styled-components'


const StyledForm = styled.form`
    display:flex;
    input, button {
        padding:10px;
        background:white;
        border:1px solid #bbb;
    }

    input {
        border-radius:5px 0px 0px 5px;
        flex-grow:1;
    }

    button {
        border-left: 0px;
        border-radius:0px 5px 5px 0px;
        outline:0px;
        &:hover {
            background:#eee;
        }
    }


`

class Search extends Component {
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
                    placeholder={this.props.children}
                />
                <button type="submit">+</button>
            </StyledForm>
        );
    }
}


export default Search
