import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsNextPage: 1,
            gifsNextPage: 0
        }

    }
    handleClick = () => {
        this.setState({
            newsNextPage: this.state.newsNextPage += 1,
            gifsNextPage: this.state.gifsNextPage += 18

        })
    }

    render() {
        return (
            <div className='pageNav'>


                <button className="nextButton" onClick={() => {
                    this.handleClick(1)
                    this.props.onNextButtonClick(this.state.newsNextPage)
                    this.props.onNextButtonClick(this.state.gifsNextPage)
                }}>Next </button>

            </div>
        )
    }

}

export default Pages
