import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  state = {
    dragons: []
  }

  fetchDragons = () => {
    fetch(`http://localhost:3001/dragons`)
      .then( res => res.json() )
      .then( dragons => this.setState({dragons: dragons}))
  }

  componentDidMount(){
    this.fetchDragons()
  }

  render() {
    return (
      <div>
        <Home />
        <War />
      </div>
    );
  }
}

export default App;
