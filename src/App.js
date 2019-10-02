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
      pageNum: null

    }
  }
  // used to pass props from SearchBar to NewsList
  onSubmittedSearch = (inputValue) => {
    console.log(inputValue)
    this.setState({
      inputValue: inputValue
    })
  }
  onNextButtonClick = (pageNum) => {
    console.log('hey')
  }


  render() {
    return (
      <main>
        <Header
          title='Gif The News'
          subHeading='See The Gifs That Match The News'
        />

        <SearchBar onSubmittedSearch={this.onSubmittedSearch} />
        

        <NewsList inputValue={this.state.inputValue} />


        <Pages onNextButtonClick={this.state.onNextButtonClick} />
        <Footer />


      </main>
    )
  }
}

export default App;
