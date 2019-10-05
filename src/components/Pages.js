import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: 0
        }

    }
    handleClick = (num) => {
        return this.setState({
            nextPage: num++
        })
    }

    render() {
        return (
            <div className='pageNav'>


                <button className="nextButton" onClick={() => this.handleClick}>Next </button>

            </div>
        )
    }

}

export default Pages
