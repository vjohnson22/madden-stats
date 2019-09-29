import React from 'react'
import axios from 'axios'
import './Players.css'
import {Link} from 'react-router-dom'


class Players extends React.Component{
    constructor(){
        super()

        this.state = {
            players:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://maddenstats.herokuapp.com/players/')
            .then(res => {
                res.data.sort((a,b)=> (a.name > b.name) ? 1 : -1)
                this.setState({players: res.data})
            })
            
    }
    
    render(){
        let playerPics = this.state.players.map( (player, i)=> {
            return(
                <div className = 'playerGrid' key= {i}>
                    <img className='playerImage' src = {player.photo_url}/>
                    <Link to ={`/player/${player.id}`}><h2>{player.name}</h2></Link>
                    <h3>{player.position}</h3> 
                </div>
            )
        })
        return(
            <div className= 'layout'>
                {playerPics}
            </div>
        )
    }
}

export default Players