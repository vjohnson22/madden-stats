import React from 'react'
import axios from 'axios'
import HeadToHeadStats from '../HeadToHeadStats/HeadToHeadStats'
import './HeadToHeadContainer.css'
import Opponent from '../Opponent/Opponent'
import TrendsContainer from '../TrendsContainer/TrendsContainer'

class HeadToHeadContainer extends React.Component{
    constructor(){
        super()

        this.state={
            data:[],
            versus:"",
            versusCode:"",
            versusName:'All',
            switch:""
        }
    }
    updateVersus = (e) => {
        this.setState({versus:e.target.value})
    }
    findPlayer = (e) => {
        e.preventDefault()
        if(this.state.versus.toLowerCase() === 'vic'){
            this.setState({versusCode:1, versusName: "Vic"})
            
        } else if (this.state.versus.toLowerCase() === 'dennis'){
            this.setState({versusCode:2, versusName: "Dennis"})
        } else if (this.state.versus.toLowerCase() === 'dj'){
            this.setState({versusCode:3, versusName: "DJ"})
        } else if (this.state.versus.toLowerCase() === 'reggie'){
            this.setState({versusCode:4, versusName: "Reggie"})
        } else if (this.state.versus.toLowerCase() === 'arwin'){
            this.setState({versusCode:5, versusName: "Arwin"})
        } else if (this.state.versus.toLowerCase() === 'jay'){
            this.setState({versusCode:6, versusName: "Jay"})
        } else {
            alert('Invalid name')
    }
}
    componentDidMount(){
        this.forceUpdate()
    }
        
    render(){
        let wins
        let losses
        
        if(this.state.versusName=== "All"|| this.state.versusName=== undefined  ){
            if (this.props.games === undefined){
                wins = 0
                losses = 0
                
            }else{
                let winArray = this.props.games.filter( game => {
                    if(game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                    return true
                    }
                })
                wins = winArray.length
                let lossArray = this.props.games.filter( game => {
                    if(game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                        return true
                    }
                })
                losses = lossArray.length          
        }
        
                
        
            
        }else {
            if (this.props.games === undefined){
                wins = 0
                losses = 0
            }else{
                let winArray = this.props.games.filter( game => {
                    if(game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && game.lost === `https://maddenstats.herokuapp.com/owners/${this.state.versusCode}`){
                    
                    
                    return true
                    }
                })
                wins = winArray.length
                let lossArray = this.props.games.filter( game => {
                    if(game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.state.versusCode}`){
                    return true
                    }
                })
                losses = lossArray.length          
            }
           
    
        }
        
        return(
            <div>
                <input placeholder="Versus?" value={this.state.versus} onChange={this.updateVersus}/> 
                <button onClick={this.findPlayer}>Submit</button>
                {/* <HeadToHeadStats games = {this.props.games} gamestats={this.props.gamestats} owner={this.props.id} againstCode = {this.state.versusCode} againstName = {this.state.versusName}/> */}
                <h1>Record Against {this.state.versusName}: {wins}-{losses}</h1>
                <div className='grids'>
                    <h1>{this.props.name}</h1>
                    <h2>VS.</h2>
                    <h1>{this.state.versusName}</h1>
                    <HeadToHeadStats owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="points"/>
                    <h2>PPG</h2>
                    <Opponent owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="points"/>
                    <HeadToHeadStats owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="off_yards_gained"/>
                    <h2>Total Offense</h2>
                    <Opponent owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="off_yards_gained"/>
                    <HeadToHeadStats owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="rush_yards"/>
                    <h2>Rush Yards</h2>
                    <Opponent owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="rush_yards"/>
                    <HeadToHeadStats owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="pass_yards"/>
                    <h2>Pass Yards</h2>
                    <Opponent owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="pass_yards"/>
                    <HeadToHeadStats owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="first_downs"/>
                    <h2>First Downs</h2>
                    <Opponent owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="first_downs"/>
                    <HeadToHeadStats owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="turnovers"/>
                    <h2>Turnovers</h2>
                    <Opponent owner = {this.props.id} against ={this.state.versusName} againstCode = {this.state.versusCode} gamestats={this.props.gamestats} stat="turnovers"/>
                </div>
                <div>
                    <h1>Trends</h1>
                    <TrendsContainer owner_games = {this.props.owner_game_stats} id= {this.props.id} name= {this.props.name} against_games = {this.props.played_against} versus= {this.state.versusName} versusCode = {this.state.versusCode} gamestats = {this.props.gamestats} game = {this.props.games}/>
                </div>
            </div>
        )
    }
}

export default HeadToHeadContainer