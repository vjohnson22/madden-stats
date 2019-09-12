import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'

import Standings from './Standings/Standings'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav>
          <Link to= '/'>Standings</Link>

        </nav>
        <main>
          <Route exact path = '/' Component = {Standings}/>
        </main>
      </div>
    );
  }
}

export default App;
