import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'

import StandingsContainer from './StandingsContainer/StandingsContainer'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav>
          <Link to= '/'>Standings</Link>

        </nav>
        <main>
          <Route exact path = '/' component = {StandingsContainer}/>
        </main>
      </div>
    );
  }
}

export default App;
