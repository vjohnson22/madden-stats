import React from 'react';
import './StandingsTable.css'
import {Link} from 'react-router-dom'

class StandingsTable extends React.Component{
  render(){
    let props = this.props.results.sort((a,b)=> (a.winPercent < b.winPercent) ? 1 : -1)
    console.log(props)
    
    let standings = props.map( (owner, i) => {
      return(
        <div key = {i} className= 'grid'>
          <Link to={`owners/${owner.id}`}> <h2>{owner.name}</h2></Link>
          <h2>{owner.winPercent.toFixed(2)}</h2>
          <h2>{owner.winNumber}</h2>
          <h2>{owner.lossNumber}</h2>
        </div>
      )
    })
    return(
      <div className ='container'>
        <h1>User vs. User Standings</h1>
        <div className = 'grid' >
          <h1>Name</h1> <h1>Win Percent</h1> <h1>Wins</h1><h1>Losses</h1>
        </div>
        {standings}
      </div>
    )  
  }

} 

 export default StandingsTable