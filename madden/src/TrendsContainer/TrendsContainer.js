import React from 'react'
import VsLineChart from '../VsLineChart/VsLineChart'





  




class TrendsContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            stats:'points'
        }
    }
    updateStats(e){
        this.setState({stats:'points'})
    }
    render(){
        
        let games
        let weekLabel 
        let playerStats 
        let againstStats
        let playerData
        let againstData 
        if (this.props.game === undefined ){
            games = []
            
        }else if (this.props.versus === "All"){
            // this.props.game.sort((a,b)=> (a.id < b.id) ? 1 : -1)
            games = this.props.game.filter( game => {
                if (game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` || game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                } 
            })
            playerStats = this.props.gamestats.filter(stats => {
                if (stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                }
            })
            playerData = playerStats.map(stats =>{
                return stats[`${this.state.stats}`]
            })   
            againstStats = this.props.gamestats.filter(stats => {
                if (stats.against === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                    }    
            })
            againstData = againstStats.map(stats =>{
                return stats[`${this.state.stats}`]
            })

            
            weekLabel = games.map( game => {
                return `Week ${game.week}, ${game.season}`
            })
        }else if (this.props.versus !== "All" ){
            games = this.props.game.filter( game => {
                if ((game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}`)||(game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`)){
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
               <input placeholder="Stats to Trend?" value={this.state.stats}></input>
               <button onClick={this.UpdateStats}>Submit</button> 
               {/* add functions to capture submit */}
              <VsLineChart name={this.props.name} versus = {this.props.versus} label= {weekLabel} playerStats={playerData} againstStats = {againstData} statsToTrend={this.state.stats}/>
            </div>
        )
    }
}

export default TrendsContainer