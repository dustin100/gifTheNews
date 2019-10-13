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
      inputValue: inputValue,
      newsPageNum: 1,
      gifPageNum: 0
    })
  }
  onNextButtonClick = () => {
    this.setState({
      newsPageNum: this.state.newsPageNum + 1,
      gifPageNum: this.state.gifPageNum + 18
    })
  }
  onPrevButtonClick = () => {
    this.setState({
      newsPageNum: Math.max(this.state.newsPageNum - 1, 1),
      gifPageNum: Math.max(this.state.gifPageNum - 18, 0)
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


        <Pages onNextButtonClick={this.onNextButtonClick} onPrevButtonClick={this.onPrevButtonClick} currentPage={this.state.newsPageNum} />
        <Footer />


      </main>
    )
  }
}

export default App;