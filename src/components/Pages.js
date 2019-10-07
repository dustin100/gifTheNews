import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextNewsPage: 1,
            nextGifPage: 0
        }

    }
    handleClick = () => {
        this.setState({
            nextNewsPage: this.state.nextNewsPage += 1,
            nextGifPage: this.state.nextGifPage += 18
        })
    }


    render() {
        return (
            <div className='pageNav'>


                <button className="PrevButton" onClick={() => {

                }}>Previous </button>

                <button className="nextButton" onClick={() => {
                    this.handleClick();
                    this.props.onNextButtonClick(this.state.nextNewsPage, this.state.nextGifPage);
                }}>Next </button>

            </div>
        )
    }

}

export default Pages
