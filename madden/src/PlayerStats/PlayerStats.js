import React from 'react'
import axios from 'axios'

class PlayerStats extends React.Component{
    constructor() {
        super()

        this.state= {
            stats:[],
            playerStats:[],
            pass_yards_avg:"",
            pass_td_avg:"",
            times_sacked_avg:"",
            pass_complete_avg:"",
            pass_attempt_avg:"",
            rush_yards_avg:"",
            rush_tds_avg:"",
            fumbled_avg:"",
            break_tackle_avg:"", 
            receptions_avg:"",
            receiving_yards_avg:"", 
            receiving_tds_avg:"",
            tackles_avg:"",
            tfl_avg:"",
            sacks_avg:"",
            interceptions_avg:"",
            defensive_tds_avg:"",
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

        // averages
        let pass_yards = 0
        let pass_td = 0
        let times_sacked = 0
        let pass_complete = 0
        let pass_attempt  = 0
        let rush_yards = 0
        let rush_tds = 0
        let fumbled = 0
        let break_tackle = 0 
        let receptions = 0
        let receiving_yards = 0 
        let receiving_tds = 0
        let tackles = 0
        let tfl = 0
        let sacks = 0
        let interceptions = 0
        let defensive_tds = 0

        let pass_yards_avg = 0
        let pass_td_avg = 0
        let times_sacked_avg = 0
        let pass_complete_avg = 0
        let pass_attempt_avg = 0
        let rush_yards_avg = 0
        let rush_tds_avg = 0
        let fumbled_avg = 0
        let break_tackle_avg = 0 
        let receptions_avg = 0
        let receiving_yards_avg = 0 
        let receiving_tds_avg = 0
        let tackles_avg = 0
        let tfl_avg = 0
        let sacks_avg = 0
        let interceptions_avg = 0
        let defensive_tds_avg = 0

        if (this.state.playerStats.length !== 0){
            this.state.playerStats.forEach( game => {
                pass_yards += game.pass_yards
                pass_td += game.pass_td
                times_sacked += game.times_sacked 
                pass_complete += game.pass_complete
                pass_attempt  += game.pass_attempt
                rush_yards += game.rush_yards
                rush_tds += game.rush_tds
                fumbled += game.fumbled
                break_tackle += game.break_tackle
                receptions += game.receptions
                receiving_yards += game.receiving_yards
                receiving_tds += game.receiving_tds
                tackles += game.tackles
                tfl += game.tfl
                sacks += game.sacks
                interceptions += game.interceptions
                defensive_tds += game.defensive_tds
            })

            pass_yards_avg = pass_yards / this.state.playerStats.length
            pass_td_avg = pass_td / this.state.playerStats.length
            times_sacked_avg = times_sacked / this.state.playerStats.length
            pass_complete_avg = pass_complete / this.state.playerStats.length
            pass_attempt_avg = pass_attempt/ this.state.playerStats.length
            rush_yards_avg = rush_yards / this.state.playerStats.length
            rush_tds_avg = rush_tds / this.state.playerStats.length
            fumbled_avg = fumbled / this.state.playerStats.length
            break_tackle_avg = break_tackle/ this.state.playerStats.length 
            receptions_avg = receptions / this.state.playerStats.length
            receiving_yards_avg = receiving_yards / this.state.playerStats.length 
            receiving_tds_avg = receiving_tds/ this.state.playerStats.length
            tackles_avg =  tackles/ this.state.playerStats.length
            tfl_avg = tfl / this.state.playerStats.length
            sacks_avg = sacks / this.state.playerStats.length
            interceptions_avg = interceptions / this.state.playerStats.length
            defensive_tds_avg = defensive_tds / this.state.playerStats.length

            if(this.state.pass_td_avg === ""){
                this.setState({
                    pass_yards_avg: pass_yards_avg,
                    pass_td_avg: pass_td_avg,
                    times_sacked_avg: times_sacked_avg,
                    pass_complete_avg: pass_complete,
                    pass_attempt_avg: pass_attempt_avg,
                    rush_yards_avg: rush_tds_avg,
                    rush_tds_avg: rush_tds,
                    fumbled_avg: fumbled_avg,
                    break_tackle_avg: break_tackle_avg, 
                    receptions_avg: receptions_avg,
                    receiving_yards_avg: receiving_yards_avg, 
                    receiving_tds_avg: receiving_tds_avg,
                    tackles_avg: tackles_avg,
                    tfl_avg: tfl_avg,
                    sacks_avg: sacks_avg,
                    interceptions_avg: interceptions_avg,
                    defensive_tds_avg: defensive_tds_avg,
                })
            }

        }
    }


        
    
    render(){
        return(
            <div>
                <h1>{this.state.pass_yards_avg}</h1>
                <h1>{this.state.pass_td_avg}</h1>
                <h1>{this.state.times_sacked_avg}</h1>
                <h1>{this.state.pass_complete_avg}</h1>
                <h1>{this.state.pass_attempt_avg}</h1>
                <h1>{this.state.rush_yards_avg}</h1>
                <h1>{this.state.rush_tds_avg}</h1>
                <h1>{this.state.fumbled_avg}</h1>
                <h1>{this.state.break_tackle_avg}</h1>
                <h1>{this.state.receptions_avg}</h1>
                <h1>{this.state.receiving_yards_avg}</h1>
                <h1>{this.state.receiving_tds_avg}</h1>
                <h1>{this.state.tackles_avg}</h1>
                <h1>{this.state.tfl_avg}</h1>
                <h1>{this.state.sacks_avg}</h1>
                <h1>{this.state.interceptions_avg}</h1>
                <h1>{this.state.defensive_tds_avg}</h1>
            </div>
        )
    }
}

export default PlayerStats