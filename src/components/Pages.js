import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextNewsPage: 1,
            nextGifPage: 0,
            prevNewsPage:1,
            prevGifPage:0
        }

    }
    handleNextClick = () => {
        this.setState({
            nextNewsPage: this.state.nextNewsPage += 1,
            nextGifPage: this.state.nextGifPage += 18
        })
    }

    handlePrevClick = () => {
        this.setState({
            prevNewsPage:this.state.prevNewsPage -1,
            prevGifPage:this.state.prevGifPage -18
        })
    }

    render() {
        return (
            <div className='pageNav'>
                <button className="PrevButton" onClick={() => {
                    this.handlePrevClick()
                    this.props.onNextButtonClick(this.state.prevNewsPage, this.state.prevGifPage)
                }}>Previous </button>

                <button className="nextButton" onClick={() => {
                    this.handleNextClick()
                    this.props.onNextButtonClick(this.state.nextNewsPage, this.state.nextGifPage)
                }}>Next </button>
            </div>
        )
    }

}

export default Pages
