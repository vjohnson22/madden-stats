import React from 'react'
import axios from 'axios'
import './Player.css'
import PlayerStats from '../PlayerStats/PlayerStats'


class Player extends React.Component{
    constructor(){
        super()

        this.state={
            player:[],
            against:"",
            id:"",
            position:''
        }
    }
    
    componentDidMount() {
        axios.get('https://maddenstats.herokuapp.com/players/')
            .then (res => {
                let playerId = res.data.filter( player => {
                    return `/player/${player.id}` === this.props.location.pathname
                })
                this.setState({player: playerId})
            })
    }
    componentDidUpdate() {
        if(this.state.player.length >0){
            if(this.state.player[0].id !== this.state.id){
                this.setState({id: this.state.player[0].id, position: this.state.player[0].position  })
            }
        }
    }
    render(){
        let playerInfo = this.state.player.map((player, i) => {
            return(
            <div className = 'playerHeading'key={i}>
                <img className='pic' src = {player.photo_url}/>
                <div>
                    <h1 className= 'pName'>{player.name}</h1>
                    <h2>Position: {player.position}</h2>
                </div>
            </div>
            )
        })
        return(
            <div className= 'playerLayout'>
                {playerInfo}
                <PlayerStats id={this.state.id} against={this.state.against} position={this.state.position}/>
            </div>
        )

    }
}
export default Player