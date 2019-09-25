import React, { Component } from 'react'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import NewsList from './components/NewsList.js'
import Footer from './components/Footer.js'
import 'normalize.css';
import './App.css'
import './styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  // used to pass props from SearchBar to NewsList
  onSubmittedSearch = (inputValue) => {
    console.log(inputValue)
    this.setState({
      inputValue: inputValue
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

        <NewsList inputValue={this.state.inputValue} />

        <Footer />


      </main>
    )
  }
}

export default App;
