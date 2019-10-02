import React, { Component } from 'react'


class Pages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: null,
            prevPage: null
        }
    }


    render() {
        return (
            <div className='pageNav'>

                <button type="submit" className="prevButton" onClick={() => this.something('pass something')}>Prev</button>


                <button type="submit" className="nextButton" onClick={() => this.something('pass page number')}>Next </button>

            </div>
        )
    }
}

export default Pages