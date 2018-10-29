import React, { Component } from 'react'

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
        this.setState({value: ""})
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.value} onChange={this.onChange} placeholder={this.props.children}
/>
                <button type="submit">
                    +
                </button>




            </form>
        );
    }
}


export default Search