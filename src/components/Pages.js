import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: 1
        }

    }
    handleClick = () => {
        this.setState({
            nextPage: this.state.nextPage += 1
        })
    }

    render() {
        return (
            <div className='pageNav'>


                <button className="nextButton" onClick={() => {
                    this.handleClick(1)
                    this.props.onNextButtonClick(this.state.nextPage)
                }}>Next </button>

            </div>
        )
    }

}

export default Pages
