import React from 'react'

class PerGameStats extends React.Component {
    constructor(){
        super()

        this.state = {

        }
    }

    componentDidUpdate(){
        if(this.props.playerStat !== false) {
        let gamesAdded = this.props.playerStats.map( playerStat => {
            

            let gameName = this.props.games.filter( game => {
                return `https://maddenstats.herokuapp.com/games/${game.id}` === playerStat.game
            })
            playerStat.gameName = `Week ${gameName.week}, ${gameName.season}`
        })
        console.log(gamesAdded)
    }
    }
    render(){
        return(
            <div>
                hello world
            </div>
        )
    }

}

export default PerGameStats

