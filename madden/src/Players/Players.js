import React from 'react'
import axios from 'axios'
import './Players.css'
import {Link} from 'react-router-dom'

 
class Players extends React.Component{
    constructor(){
        super()

        this.state = {
            players:[],
            playerstats:[],
            playersList:[],
            searchList:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://maddenstats.herokuapp.com/players/')
            .then(res => {
                res.data.sort((a,b)=> (a.name > b.name) ? 1 : -1)
                this.setState({players: res.data})
            })
        axios.get('https://maddenstats.herokuapp.com/playerstats/')
            .then(res => {
                this.setState({playerstats:res.data})
            })    
            
    }

    componentDidUpdate(){
        if(this.props.owner !== "" && this.props.against === "") {
            
            let games = this.state.playerstats.filter(stats => {
                return stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`
                })
                .map( stats => {
                    return stats.name
                })
                
            let filteredPlayers = this.state.players.filter(player => {
                
                return games.includes(`https://maddenstats.herokuapp.com/players/${player.id}`)
            })    
            console.log(filteredPlayers)
            if(JSON.stringify(filteredPlayers) !== JSON.stringify( this.state.playersList)){
                this.setState({playersList:filteredPlayers})
            }
             
        } else if (this.props.owner !== "" && this.props.against !== ""){
            let games = this.state.playerstats.filter(stats => {
                return stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.owner}` && stats.against === `https://maddenstats.herokuapp.com/owners/${this.props.against}`
                })
                .map( stats => {
                    return stats.name
                })
                
            let filteredPlayers = this.state.players.filter(player => {
                
                return games.includes(`https://maddenstats.herokuapp.com/players/${player.id}`)
            })    
            console.log(filteredPlayers)
            if(JSON.stringify(filteredPlayers) !== JSON.stringify( this.state.playersList)){
                this.setState({playersList:filteredPlayers})
            }
        }
        if(this.props.search !== ""){
            let search = this.props.search
            let searchMatch = new RegExp( search, "gi")
            let searchFiltered = this.state.players.filter( player => {
                return player.name.match(searchMatch) !== null
            })
            if(JSON.stringify(this.state.searchList) !== JSON.stringify(searchFiltered)){
                this.setState({searchList:searchFiltered})
            }
        }

    }
    
    render(){
        
        
        
        let playerPics = []
         if (this.props.owner !== undefined){
        playerPics = this.state.playersList.map( (player, i)=> {
            return(
                <div className = 'playerGrid' key= {i}>
                    <img className='playerImage' src = {player.photo_url}/>
                    <Link to ={`/player/${player.id}`}><h2>{player.name}</h2></Link>
                    <h3>{player.position}</h3> 
               </div>
            )
        
        })
        }else if (this.props.search !== "" ){
            playerPics = this.state.searchList.map( (player, i)=> {
                return(
                    <div className = 'playerGrid' key= {i}>
                        <img className='playerImage' src = {player.photo_url}/>
                        <Link to ={`/player/${player.id}`}><h2>{player.name}</h2></Link>
                        <h3>{player.position}</h3> 
                   </div>
                )
            
            })
    
        }else{
        
        playerPics = this.state.players.map( (player, i)=> {
            return(
                <div className = 'playerGrid' key= {i}>
                    <img className='playerImage' src = {player.photo_url}/>
                    <Link to ={`/player/${player.id}`}><h2>{player.name}</h2></Link>
                    <h3>{player.position}</h3> 
                </div>
            )
        
        })
    }
        return(
            <div className= 'layout'>
                {playerPics}
            </div>
        )
    }
}

export default Players