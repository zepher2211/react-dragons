import React, { Component } from 'react';
import War from './War'
import Home from './Home'
import { Search } from 'semantic-ui-react'

class App extends Component {

  state = {
    dragons: [],
    searchResults: false,
    value: ''
  }

  handleSearchChange = (event) => {
    if(event.target.value === ""){
      this.setState({
        ...this.state,
        searchResults: false,
        value: event.target.value
      })
    }else{
      this.setState({
        ...this.state,
        searchResults: true,
        value: event.target.value
      })
    }
  }

  patchWarStatus = (dragon) => {
    fetch(`http://localhost:3001/dragons/${dragon.props.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...dragon.props,
            atWar: !dragon.props.atWar
        })
    })

    this.setState({
      dragons: this.state.dragons.map(arrayDragon => {
        if(arrayDragon.id === dragon.props.id){
          arrayDragon.atWar = !arrayDragon.atWar
          return arrayDragon
         }else{
           return arrayDragon
         }
      })
    })
    
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
      <div className='header' style={{ margin: 'auto', width: '50%'}}>
      Search: <Search onSearchChange={this.handleSearchChange}  value={this.state.value} showNoResults={false}/>
      </div>
        <Home dragons={this.state.dragons} patchWarStatus={this.patchWarStatus} isSearching={this.state.searchResults} searchQuery={this.state.value} />
        <War dragons={this.state.dragons} patchWarStatus={this.patchWarStatus} isSearching={this.state.searchResults} searchQuery={this.state.value} />
      </div>
    );
  }
}

export default App;
