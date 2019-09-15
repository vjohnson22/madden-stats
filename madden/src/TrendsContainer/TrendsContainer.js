import React from 'react'
import VsLineChart from '../VsLineChart/VsLineChart'





  




class TrendsContainer extends React.Component{
    render(){
        let games
        let weekLabel 
        if (this.props.game === undefined){
            games = []
        }else if (this.props.versus === "All"){
            games = this.props.game.filter( game => {
                if (game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` || game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                } 
            })
            weekLabel = games.map( game => {
                return `Week ${game.week}, ${game.season}`
            })
        }
            console.log(weekLabel)
        
        return(
            <div>
              <VsLineChart name={this.props.name} versus = {this.props.versus} label= {weekLabel}/>
            </div>
        )
    }
}

export default TrendsContainer