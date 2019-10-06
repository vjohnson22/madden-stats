import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './TopPlayers.css'
import PlayerStatDropDown from '../PlayerStatDropDown/PlayerStatDropDown'

class TopPlayers extends React.Component{
    constructor(){
        super()

        this.state= {
            playerStats: [],
            players: [],
            playersAvg: [],
            stat: 'pass_yards_avg',
            title: 'Passing Yards'

        }
    }
    componentDidMount(){
        axios.get('https://maddenstats.herokuapp.com/playerstats/')
            .then(res => {
                this.setState({playerStats:res.data})
            })
        axios.get('https://maddenstats.herokuapp.com/players/')
        .then(res => {
            this.setState({players:res.data})
        })    
    }

    componentDidUpdate() {
        
            let playersAvg = this.state.players.map(player => {
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
                let games_played = 0

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

                let playerFilter = this.state.playerStats.filter(stats => {
                    return stats.name === `https://maddenstats.herokuapp.com/players/${player.id}`

                })
                playerFilter.forEach( game => {
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
                pass_yards_avg = pass_yards / playerFilter.length
                pass_td_avg = pass_td / playerFilter.length
                times_sacked_avg = times_sacked / playerFilter.length
                pass_complete_avg = pass_complete / playerFilter.length
                pass_attempt_avg = pass_attempt/ playerFilter.length
                pass_int_avg = pass_int / playerFilter.length
                rush_yards_avg = rush_yards / playerFilter.length
                rush_tds_avg = rush_tds / playerFilter.length
                fumbled_avg = fumbled / playerFilter.length
                break_tackle_avg = break_tackle/ playerFilter.length 
                receptions_avg = receptions / playerFilter.length
                receiving_yards_avg = receiving_yards / playerFilter.length 
                receiving_tds_avg = receiving_tds/ playerFilter.length
                tackles_avg =  tackles/ playerFilter.length
                tfl_avg = tfl / playerFilter.length
                sacks_avg = sacks / playerFilter.length
                interceptions_avg = interceptions / playerFilter.length
                defensive_tds_avg = defensive_tds / playerFilter.length
                games_played = playerFilter.length
                forced_fumbles_avg = forced_fumbles / playerFilter.length
                pass_defended_avg = pass_defended / playerFilter.length

                player.pass_yards_avg =pass_yards_avg
                player.pass_td_avg = pass_td_avg
                player.times_sacked_avg = times_sacked_avg
                player.pass_complete_avg = pass_complete_avg
                player.pass_attempt_avg = pass_attempt_avg
                player.pass_int_avg = pass_int_avg
                player.rush_yards_avg = rush_yards_avg
                player.rush_tds_avg = rush_tds_avg
                player.fumbled_avg = fumbled_avg
                player.break_tackle_avg = break_tackle_avg 
                player.receptions_avg = receptions_avg
                player.receiving_yards_avg = receiving_yards_avg 
                player.receiving_tds_avg = receiving_tds_avg
                player.tackles_avg = tackles_avg
                player.tfl_avg = tfl_avg
                player.sacks_avg = sacks_avg
                player.interceptions_avg = interceptions_avg
                player.defensive_tds_avg = defensive_tds_avg
                player.forced_fumbles_avg = forced_fumbles_avg
                player.pass_defended_avg = pass_defended_avg
                player.games_played = games_played

                return player
            })
        
        playersAvg.sort((a,b)=> (a[`${this.state.stat}`] < b[`${this.state.stat}`]) ? 1 : -1)
        
        let topTen = playersAvg.filter((player , i) => {
            return i <= 9
        })

        if(JSON.stringify(this.state.playersAvg) !== JSON.stringify(topTen)){    
            this.setState({playersAvg:topTen})
        }
    
    }
    updateStats = (e) => {
        let click =e.target.innerText
        

        if(click === 'Passing Yards'){
            this.setState({title:'Passing Yards', stat: 'pass_yards_avg'})
        } else if(click ==='Passing TDs'){ 
            this.setState({title:'Passing TDs', stat: 'pass_td_avg'})
        }else if(click ==='Passing Yards'){ 
            this.setState({title:'Passing Yards', stat: 'pass_yards'})
        }else if(click ==='Times Sacked'){ 
            this.setState({title:'Times Sacked', stat: 'times_sacked_avg'})
        }else if(click ==='Passes Completed'){ 
            this.setState({title:'Passes Completed', stat: 'pass_complete_avg'})  
        }else if(click ==='Passes Attempted'){ 
            this.setState({title:'Passes Attempted', stat: 'pass_attempt_avg'})  
        }else if(click ==='Interceptions Thrown'){ 
            this.setState({title:'Interceptions Thrown', stat: 'pass_int_avg'})  
        }else if(click ==='Rushing Yards'){ 
            this.setState({title:'Rushing Yards', stat: 'rush_yards_avg'})  
        }else if(click === 'Rushing TDs'){ 
            this.setState({title:'Rushing TDs', stat: 'rush_tds_avg'})  
        }else if(click ==='Fumbles'){ 
            this.setState({title:'Fumbles', stat: 'fumbled_avg'})  
        }else if(click ==='Broken Tackles'){ 
            this.setState({title:'Broken Tackles', stat: 'break_tackle_avg' })  
        }else if(click ==='Receptions'){ 
            this.setState({title:'Receptions', stat: 'receptions_avg'})  
        }else if(click ==='Receiving Yards'){ 
            this.setState({title:'Receiving Yards', stat: 'receiving_yards_avg' })  
        }else if(click ==='Receiving TDs'){ 
            this.setState({title:'Receiving TDs', stat: 'receiving_tds_avg'})  
        }else if(click ==='Tackles'){ 
            this.setState({title:'Tackles', stat: 'tackles_avg'})  
        }else if(click ==='Tackles for Loss'){ 
            this.setState({title:'Tackles for Loss', stat: 'tfl_avg'})  
        }else if(click ==='Sacks'){ 
            this.setState({title:'Sacks', stat: 'sacks_avg'})  
        }else if(click === 'Interceptions'){ 
            this.setState({title: 'Interceptions', stat: 'interceptions_avg'})  
        }else if(click ==='Defensive TDs'){ 
            this.setState({title:'Defensive TDs', stat: 'defensive_tds_avg'})  
        }else if(click ==='Forced Fumbles'){ 
            this.setState({title:'Forced Fumbles', stat: 'forced_fumbles_avg'})  
        }else if(click ==='Passes Defended'){ 
            this.setState({title:'Passes Defended', stat: 'pass_defended_avg'})  
        } 
        
    }    
    render(){
         let performers = this.state.playersAvg.map((player, i) => {
             return(
                 <div key ={i} className='topPlayerGrid topPlayerGridAlign'>
                     <img className='topPic' src={player.photo_url}/>
                     <Link to={`player/${player.id}`}><h1>{player.name}</h1></Link>
                     <h1>{player[`${this.state.stat}`].toFixed(1)}</h1>
                     <h1>{player.games_played}</h1>

                     
                 </div>
             )
         })

        

        
        return(
            <div>
                <h1>{this.state.title}</h1>
                <PlayerStatDropDown updateStats = {this.updateStats}/>
                <div className='topPlayerGrid'>
                    <div></div>
                    <h2>Name</h2>
                    <h2>{this.state.title}</h2>
                    <h2>Games Played</h2>
                </div>
                {performers}
            </div>
        )
    }
}

export default TopPlayers