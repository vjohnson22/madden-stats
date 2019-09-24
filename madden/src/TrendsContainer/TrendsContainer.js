import React from 'react'
import VsLineChart from '../VsLineChart/VsLineChart'
import axios from 'axios'




  




class TrendsContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            owner_games:[],
            game:[],
            gamestats:[],
            stats:'points'
        }
    }
    componentDidMount(){
        axios.get(`https://maddenstats.herokuapp.com/games`)
            .then(res => {
                this.setState({game:res.data})
            })

        axios.get('https://maddenstats.herokuapp.com/gamestats/')
            .then(res => {
              res.data.sort((a,b)=> (a.id > b.id) ? 1 : -1)
                this.setState({gamestats:res.data})
            })            
    }
    // updateStats(e){
    //     this.setState({stats:'points'})
    // }
    render(){
        
        let games
        let weekLabel 
        let playerStats 
        let againstStats
        let playerData
        let againstData 
        let loading = ['Loading']
        let chart
        if (this.state.game === undefined ){
            games = []
            chart = loading.map( load => {
                return <h1>Loading</h1>
            })
        }else if (this.props.versus === "All"){
            // this.props.game.sort((a,b)=> (a.id < b.id) ? 1 : -1)
            games = this.state.game.filter( game => {
                if (game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` || game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                } 
            })
            playerStats = this.state.gamestats.filter(stats => {
                if (stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                }
            })
            playerData = playerStats.map(stats =>{
                return stats[`${this.state.stats}`]
            })   
            againstStats = this.state.gamestats.filter(stats => {
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
            chart = loading.map( load => {
                return <VsLineChart name={this.props.name} versus = {this.props.versus} label= {weekLabel} playerStats={playerData} againstStats = {againstData} statsToTrend={this.state.stats}/>
            })
        }else if (this.props.versus !== "All" ){
            games = this.state.game.filter( game => {
                if ((game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}`)||(game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`)){
                    return true
                } 
            })
            weekLabel = games.map( game => {
                return `Week ${game.week}, ${game.season}`
            })
            chart = loading.map( load => {
                return <VsLineChart name={this.props.name} versus = {this.props.versus} label= {weekLabel} playerStats={playerData} againstStats = {againstData} statsToTrend={this.state.stats}/>
            })
        }
            // console.log(weekLabel)
        
        return(
            <div>
               {/* <input placeholder="Stats to Trend?" value={this.state.stats}></input>
               <button onClick={this.UpdateStats}>Submit</button>  */}
               {/* add functions to capture submit */}
                {chart}
            </div>
        )
    }
}

export default TrendsContainer