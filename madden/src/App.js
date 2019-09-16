import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

import StandingsContainer from './StandingsContainer/StandingsContainer'
import Owner from './Owner/Owner'
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super()

    this.state={}
  }
  
  componentDidMount(){
    
    axios.get('https://maddenstats.herokuapp.com/gamestats/')
        .then(res => {
          res.data.sort((a,b)=> (a.id > b.id) ? 1 : -1)
            this.setState({gamestats:res.data})
        })
    axios.get('https://maddenstats.herokuapp.com/games/')
       .then(res => {
            this.setState({games:res.data})
        })    
}  
  
  
  render(){
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Farro&display=swap');
        </style>
        <nav>
          <Link to= '/'>Standings</Link>

        </nav>
        <main>
          <Route exact path = '/' component = {StandingsContainer}/>
          <Route path = '/owners' render = {routerProps => <Owner games={this.state.games} gamestats={this.state.gamestats} {...routerProps}/>}/>
        </main>
      </div>
    );
  }
}

export default App;
