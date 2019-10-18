import React from 'react'
import axios from 'axios'
import './PlayerStats.css'
import PerGameStats from '../PerGameStats/PerGameStats'


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
            games: [],
            owners: [],
            perGameStats:[]
        }
    }
    componentDidMount() {
        // axios.get('https://maddenstats.herokuapp.com/playerstats/')
        //     .then( res => {
        //         this.setState({stats: res.data})
        //     })
        axios.all([
            axios.get('https://maddenstats.herokuapp.com/playerstats/'),
            axios.get('https://maddenstats.herokuapp.com/games'),
            axios.get('https://maddenstats.herokuapp.com/owners'),
            ])
            .then( res => {
                this.setState({stats: res[0].data, games:res[1].data, owners: res[2].data})
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
        let pass_int_avg = 0
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
                    pass_yards_avg: pass_yards_avg.toFixed(1),
                    pass_td_avg: pass_td_avg.toFixed(1),
                    times_sacked_avg: times_sacked_avg.toFixed(1),
                    pass_complete_avg: pass_complete_avg.toFixed(1),
                    pass_attempt_avg: pass_attempt_avg.toFixed(1),
                    rush_yards_avg: rush_yards_avg.toFixed(1),
                    rush_tds_avg: rush_tds_avg.toFixed(1),
                    fumbled_avg: fumbled_avg.toFixed(1),
                    break_tackle_avg: break_tackle_avg.toFixed(1), 
                    receptions_avg: receptions_avg.toFixed(1),
                    receiving_yards_avg: receiving_yards_avg.toFixed(1), 
                    receiving_tds_avg: receiving_tds_avg.toFixed(1),
                    tackles_avg: tackles_avg.toFixed(1),
                    tfl_avg: tfl_avg.toFixed(1),
                    sacks_avg: sacks_avg.toFixed(1),
                    interceptions_avg: interceptions_avg.toFixed(1),
                    defensive_tds_avg: defensive_tds_avg.toFixed(1),
                    games_played:games_played,
                    pass_int_avg: pass_int_avg.toFixed(1),
                    forced_fumbles_avg: forced_fumbles_avg.toFixed(1),
                    pass_defended_avg: pass_defended_avg.toFixed(1)
                })
            }


        }
// adding the game name to each player stat
        if(this.state.playerStats.length > 0 && this.state.games.length > 0) {
            let gamesAdded = this.state.playerStats.map( playerStat => {
                
    
                let gameName = this.state.games.filter( game => {
                    
                    return `https://maddenstats.herokuapp.com/games/${game.id}` === playerStat.game
                })

                console.log(gameName)
                playerStat.gameName = `Week ${gameName[0].week}, ${gameName[0].season}`
                
                let ownerName = this.state.owners.filter( owner => {
                    
                    return `https://maddenstats.herokuapp.com/owners/${owner.id}` === playerStat.owner
                })
    
                playerStat.ownerName = ownerName[0].name
                
                let againstName = this.state.owners.filter( owner => {
                    
                    return `https://maddenstats.herokuapp.com/owners/${owner.id}` === playerStat.against
                })
    
                playerStat.againstName = againstName[0].name
                

                return playerStat    

            })
            console.log(gamesAdded)
        
            if (JSON.stringify(this.state.perGameStats) !== JSON.stringify(gamesAdded) ){
                this.setState({perGameStats: gamesAdded })
            }   
            
        }
        
    }


        
    
    render(){
        let placeholder = ['placeholder']
        let table = placeholder.map( table => {
            if(this.props.position === 'QB' ){
                return (
                    <div className= 'playerTable'>
                        <h2>User Games Played:</h2> <h2>{this.state.games_played}</h2>
                        <h2>Pass Yards: </h2> <h2> {this.state.pass_yards_avg}</h2>
                        <h2>Pass Tds: </h2> <h2>{this.state.pass_td_avg}</h2>
                        <h2>Interceptions Thrown: </h2> <h2>{this.state.pass_int_avg} </h2>
                        <h2>Times Sacked: </h2> <h2>{this.state.times_sacked_avg}</h2>
                        <h2>Passes Completed: </h2> <h2>{this.state.pass_complete_avg}</h2>
                        <h2>Passes Attempted:</h2> <h2>{this.state.pass_attempt_avg}</h2>
                        <h2>Completion%:</h2> <h2> {((this.state.pass_complete_avg / this.state.pass_attempt_avg)*100).toFixed(0)} </h2>
                        <h2>Rush Yards: </h2> <h2>{this.state.rush_yards_avg}</h2>
                        <h2>Rushing Tds: </h2> <h2>{this.state.rush_tds_avg}</h2>
                        <h2>Fumbles: </h2> <h2>{this.state.fumbled_avg}</h2>
                        <h2>Broken Tackles: </h2> <h2>{this.state.break_tackle_avg}</h2>
                    </div>
                )
            }else if(this.props.position === 'WR'  || this.props.position === 'TE'  || this.props.position === 'HB'  || this.props.position === 'FB'){
                return (
                    <div className= 'playerTable'>
                        <h2>User Games Played: </h2> <h2>{this.state.games_played}</h2>
                        <h2>Rush Yards:</h2> <h2> {this.state.rush_yards_avg}</h2>
                        <h2>Rushing Tds: </h2> <h2>{this.state.rush_tds_avg}</h2>
                        <h2>Fumbles: </h2> <h2>{this.state.fumbled_avg}</h2>
                        <h2>Broken Tackles: </h2> <h2>{this.state.break_tackle_avg}</h2>
                        <h2>Receptions: </h2> <h2>{this.state.receptions_avg}</h2>
                        <h2>Receiving Yards: </h2> <h2>{this.state.receiving_yards_avg}</h2>
                        <h2>Receiving Tds: </h2> <h2>{this.state.receiving_tds_avg}</h2>
                    </div>
                )
            }else{
                return(
                    <div className= 'playerTable'>
                        <h2>User Games Played: </h2> <h2>{this.state.games_played}</h2>
                        <h2>Tackles: </h2> <h2>{this.state.tackles_avg}</h2>
                        <h2>Tackles for Loss: </h2> <h2>{this.state.tfl_avg}</h2>
                        <h2>Sacks: </h2> <h2>{this.state.sacks_avg}</h2>
                        <h2>Forced Fumbles: </h2> <h2>{this.state.forced_fumbles_avg}</h2>
                        <h2>Interceptions: </h2> <h2>{this.state.interceptions_avg}</h2>
                        <h2>Passes Defended: </h2> <h2>{this.state.pass_defended_avg}</h2>
                        <h2>Defensive Tds: </h2> <h2>{this.state.defensive_tds_avg}</h2>
                    </div>        
                )
            }
        })
        // adds the headers
        let perGameTitles = placeholder.map( table => {
            if(this.props.position === 'QB' ){
                return (
                    <div className= 'qbStats'>
                        <h5>Game</h5>
                        <h5>Owner</h5>
                        <h5>Against</h5>
                        <h5>Pass Yards</h5>
                        <h5>Pass Tds</h5>
                        <h5>Interceptions Thrown</h5>
                        <h5>Times Sacked</h5>
                        <h5>Passes Completed</h5>
                        <h5>Passes Attempted</h5>
                        <h5>Completion%</h5>
                        <h5>Rush Yards </h5>
                        <h5>Rushing Tds</h5>
                        <h5>Fumbles</h5>
                        <h5>Broken Tackles</h5>
                    </div>
                )
            }else if(this.props.position === 'WR'  || this.props.position === 'TE'  || this.props.position === 'HB'  || this.props.position === 'FB'){
                return (
                    <div className= 'skillStats'>
                        <h4>Game</h4>
                        <h4>Owner</h4>
                        <h4>Against</h4>
                        <h4>Rush Yards</h4>
                        <h4>Rushing Tds</h4>
                        <h4>Fumbles</h4>
                        <h4>Broken Tackles</h4>
                        <h4>Receptions</h4>
                        <h4>Receiving Yards</h4>
                        <h4>Receiving Tds</h4>
                    </div>
                )
            }else{
                return(
                    <div className= 'defenseStats'>
                        <h4>Game</h4>
                        <h4>Owner</h4>
                        <h4>Against</h4>
                        <h4>Tackles</h4>
                        <h4>Tackles for Loss</h4>
                        <h4>Sacks</h4>
                        <h4>Forced Fumbles</h4>
                        <h4>Interceptions</h4>
                        <h4>Passes Defended</h4>
                        <h4>Defensive Tds</h4>
                    </div>        
                )
            }
        })
        let perGame = this.state.perGameStats.map( table => {
            if(this.props.position === 'QB' ){
                return (

                    
                    <div className= 'qbStats'>
                        <h5>{table.gameName}</h5>
                        <h5>{table.ownerName}</h5>
                        <h5>{table.againstName}</h5>
                        <h5>{table.pass_yards}</h5>
                        <h5>{table.pass_td}</h5>
                        <h5>{table.pass_int}</h5>
                        <h5>{table.times_sacked}</h5>
                        <h5>{table.pass_complete}</h5>
                        <h5>{table.pass_attempt}</h5>
                        <h5>{((table.pass_complete/table.pass_attempt)*100).toFixed(1)}</h5>
                        <h5>{table.rush_yards}</h5>
                        <h5>{table.rush_tds}</h5>
                        <h5>{table.fumbled}</h5>
                        <h5>{table.break_tackle}</h5>
                    </div>
                )
            }else if(this.props.position === 'WR'  || this.props.position === 'TE'  || this.props.position === 'HB'  || this.props.position === 'FB'){
                return (
                    <div className= 'skillStats'>
                        <h4>{table.gameName}</h4>
                        <h4>{table.ownerName}</h4>
                        <h4>{table.againstName}</h4>
                        <h4>{table.rush_yards}</h4>
                        <h4>{table.rush_tds}</h4>
                        <h4>{table.fumbled}</h4>
                        <h4>{table.break_tackle}</h4>
                        <h4>{table.receptions}</h4>
                        <h4>{table.receiving_yards}</h4>
                        <h4>{table.receiving_tds}</h4>
                    </div>
                )
            }else{
                return(
                    <div className= 'defenseStats'>
                        <h4>{table.gameName}</h4>
                        <h4>{table.ownerName}</h4>
                        <h4>{table.againstName}</h4>
                        <h4>{table.tackles}</h4>
                        <h4>{table.tfl}</h4>
                        <h4>{table.sacks}</h4>
                        <h4>{table.forced_fumbles}</h4>
                        <h4>{table.interceptions}</h4>
                        <h4>{table.pass_defended}</h4>
                        <h4>{table.defensive_tds}</h4>
                    </div>        
                )
            }
        })

        return(
            <div>
                <div className= 'playerStatsGrid'>
                    <div>
                    <h1>User Game Averages</h1>
                    {table}
                    </div>
                    
                </div>
                {perGameTitles}
                {perGame}
            </div>
        )
    }
}

export default PlayerStats