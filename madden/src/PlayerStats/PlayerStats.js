import React from 'react'
import axios from 'axios'

class PlayerStats extends React.Component{
    constructor() {
        super()

        this.state= {
            stats:[],
            playerStats:[]
        }
    }
    componentDidMount() {
        axios.get('https://maddenstats.herokuapp.com/playerstats/')
            .then( res => {
                this.setState({stats: res.data})
            })
    }

    componentDidUpdate() {
        
        
        let games = this.state.stats.filter( game => {
            return game.name === `https://maddenstats.herokuapp.com/players/${this.props.id}`
        })  
        if (JSON.stringify(this.state.playerStats) !== JSON.stringify(games) ){
            this.setState({playerStats: games })
        }
    }
        
    
    render(){
        return(
            <div>
                Hello world
            </div>
        )
    }
}

export default PlayerStats