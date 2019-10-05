import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: 1
        }

    }
    handleClick = (num) => {
        this.setState({
            nextPage: this.state.nextPage + 1
        })
    }

    render() {
        return (
            <div className='pageNav'>


                <button className="nextButton" onClick={() => {
                    return this.handleClick(2)
                }}>Next </button>

            </div >
        )
    }

}

export default Pages
