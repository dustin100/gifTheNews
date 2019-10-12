import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextNewsPage: 1,
            nextGifPage: 0,
            prevNewsPage: 1,
            prevGifPage: 0
        }

    }

    render() {
        return (
            <div className='pageNav'>
                <button disabled={this.props.newsPageNum <= 1} className="PrevButton" onClick={() => {
                    this.props.onPrevButtonClick()
                }}>Previous </button>

                <button className="nextButton" onClick={() => {
                    this.props.onNextButtonClick()
                }}>Next </button>
            </div>
        )
    }

}

export default Pages
