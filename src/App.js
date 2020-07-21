import React, { Component } from 'react';

import './App.css';

import Favorite from './Favorite';
import Characters from './Characters';

const charactersURL = 'https://rickandmortyapi.com/api/character/'

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount(){
    fetch(charactersURL)
      .then(response => response.json())
      .then(({results}) => this.setState({characters: results}))
  }

  render () {
    const { characters } = this.state

  return (
    <div className="App">
     <h1>Rick and Morty!</h1>
     <Characters characters={characters}/>
    </div>
    );
  }
}

export default App;
