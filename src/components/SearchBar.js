import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmittedSearch(this.state.inputValue)
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="searching"></label>
                    <input type="text" placeholder="Search Something" value={this.state.inputValue} required onChange={this.handleChange} />
                    <button type="submit">Search </button>
                </form>

            </section>
        )
    }

}

export default SearchBar