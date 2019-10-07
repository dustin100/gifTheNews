import React, { Component } from 'react'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import NewsList from './components/NewsList.js'
import Footer from './components/Footer.js'
import Pages from './components/Pages.js'
import 'normalize.css'
import './App.css'
import './styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: null,
      newsPageNum: 1,
      gifPageNum: 0

    }
  }
  // used to pass props from SearchBar to NewsList
  onSubmittedSearch = (inputValue) => {
    this.setState({
      inputValue: inputValue
    })
  }
  onNextButtonClick = (newsPageNum, gifPageNum) => {
    this.setState({
      newsPageNum: newsPageNum,
      gifPageNum: gifPageNum
    })
  }


  render() {
    return (
      <main>
        <Header
          title='Gif The News'
          subHeading='See The Gifs That Match The News'
        />

        <SearchBar onSubmittedSearch={this.onSubmittedSearch} />


        <NewsList inputValue={this.state.inputValue} newsPageNum={this.state.newsPageNum} gifPageNum={this.state.gifPageNum} />


        <Pages onNextButtonClick={this.onNextButtonClick} />
        <Footer />


      </main>
    )
  }
}

export default App;