import React from 'react'
import axios from 'axios'
import './PlayerStats.css'

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
            games_played:"",
            pass_int_avg:"",
            forced_fumbles_avg: "",
            pass_defended_avg:"",
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
        let pass_int = 0
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
        let forced_fumbles = 0 
        let pass_defended = 0

        let pass_yards_avg = 0
        let pass_td_avg = 0
        let times_sacked_avg = 0
        let pass_complete_avg = 0
        let pass_attempt_avg = 0
        let pass_int_avg
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
        let forced_fumbles_avg = 0
        let pass_defended_avg = 0

        let games_played = 0

        if (this.state.playerStats.length !== 0){
            this.state.playerStats.forEach( game => {
                pass_yards += game.pass_yards
                pass_td += game.pass_td
                times_sacked += game.times_sacked 
                pass_complete += game.pass_complete
                pass_attempt  += game.pass_attempt
                pass_int += game.pass_int
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
                forced_fumbles += game.forced_fumbles
                pass_defended += game.pass_defended
            })

            pass_yards_avg = pass_yards / this.state.playerStats.length
            pass_td_avg = pass_td / this.state.playerStats.length
            times_sacked_avg = times_sacked / this.state.playerStats.length
            pass_complete_avg = pass_complete / this.state.playerStats.length
            pass_attempt_avg = pass_attempt/ this.state.playerStats.length
            pass_int_avg = pass_int / this.state.playerStats.length
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
            games_played = this.state.playerStats.length
            forced_fumbles_avg = forced_fumbles / this.state.playerStats.length
            pass_defended_avg = pass_defended / this.state.playerStats.length

            if(this.state.pass_td_avg === ""){
                this.setState({
                    pass_yards_avg: pass_yards_avg,
                    pass_td_avg: pass_td_avg,
                    times_sacked_avg: times_sacked_avg,
                    pass_complete_avg: pass_complete_avg,
                    pass_attempt_avg: pass_attempt_avg,
                    rush_yards_avg: rush_yards_avg,
                    rush_tds_avg: rush_tds_avg,
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
                    games_played:games_played,
                    pass_int_avg: pass_int_avg,
                    forced_fumbles_avg: forced_fumbles_avg,
                    pass_defended_avg: pass_defended_avg
                })
            }

        }
    }


        
    
    render(){
        let placeholder = ['placeholder']
        let table = placeholder.map( table => {
            if(this.props.position === 'QB' ){
                return (
                    <div>
                        <h2>User Games Played: {this.state.games_played}</h2>
                        <h2>Pass Yards: {this.state.pass_yards_avg}</h2>
                        <h2>Pass Tds: {this.state.pass_td_avg}</h2>
                        <h2>Interceptions Thrown: {this.state.pass_int_avg} </h2>
                        <h2>Times Sacked: {this.state.times_sacked_avg}</h2>
                        <h2>Passes Completed: {this.state.pass_complete_avg}</h2>
                        <h2>Passes Attempted:{this.state.pass_attempt_avg}</h2>
                        <h2>Completion%: {((this.state.pass_complete_avg / this.state.pass_attempt_avg)*100).toFixed(0)} </h2>
                        <h2>Rush Yards: {this.state.rush_yards_avg}</h2>
                        <h2>Rushing Tds: {this.state.rush_tds_avg}</h2>
                        <h2>Fumbles: {this.state.fumbled_avg}</h2>
                        <h2>Broken Tackles: {this.state.break_tackle_avg}</h2>
                    </div>
                )
            }else if(this.props.position === 'WR'  || this.props.position === 'TE'  || this.props.position === 'HB'  || this.props.position === 'FB'){
                return (
                    <div>
                        <h2>User Games Played: {this.state.games_played}</h2>
                        <h2>Rush Yards: {this.state.rush_yards_avg}</h2>
                        <h2>Rushing Tds: {this.state.rush_tds_avg}</h2>
                        <h2>Fumbles: {this.state.fumbled_avg}</h2>
                        <h2>Broken Tackles: {this.state.break_tackle_avg}</h2>
                        <h2>Receptions: {this.state.receptions_avg}</h2>
                        <h2>Receiving Yards: {this.state.receiving_yards_avg}</h2>
                        <h2>Receiving Tds: {this.state.receiving_tds_avg}</h2>
                    </div>
                )
            }else{
                return(
                    <div>
                        <h2>User Games Played: {this.state.games_played}</h2>
                        <h2>Tackles: {this.state.tackles_avg}</h2>
                        <h2>Tackles for Loss: {this.state.tfl_avg}</h2>
                        <h2>Sacks: {this.state.sacks_avg}</h2>
                        <h2>Forced Fumbles: {this.state.forced_fumbles_avg}</h2>
                        <h2>Interceptions: {this.state.interceptions_avg}</h2>
                        <h2>Passes Defended: {this.state.pass_defended_avg}</h2>
                        <h2>Defensive Tds: {this.state.defensive_tds_avg}</h2>
                    </div>        
                )
            }
        })
        return(
            <div className= 'playerStatsGrid'>
                <div>
                <h1>User Game Averages</h1>
                {table}
                </div>
            </div>
        )
    }
}

export default PlayerStats