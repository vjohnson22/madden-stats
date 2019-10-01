import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

import Standings from './Standings/Standings'
import Owner from './Owner/Owner'
import Players from './Players/Players'
import Player from './Player/Player'

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
        
        <nav>
          <Link to= '/'>Standings</Link>
          <Link to= '/players'>Players</Link>
        </nav>
        <main>
          <Route exact path = '/' component = {Standings}/>
          <Route  path = '/owners' render = {routerProps => <Owner games={this.state.games} gamestats={this.state.gamestats} {...routerProps}/>}/>
          <Route exact path = '/players' component = {Players}/>
          <Route  path = '/player' render = {routerProps => <Player {...routerProps}/>}/>
        </main>
      </div>
    );
  }
}

export default App;
