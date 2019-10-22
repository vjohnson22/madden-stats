import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './CareerStats.css'
import PlayerStatDropDown from '../PlayerStatDropDown/PlayerStatDropDown'
 
class CareerStats extends React.Component{
    constructor(){
        super()

        this.state= {
            playerStats: [],
            players: [],
            playersAvg: [],
            stat: 'pass_yards',
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
                

                player.pass_yards =pass_yards
                player.pass_td = pass_td
                player.times_sacked = times_sacked
                player.pass_complete = pass_complete
                player.pass_attempt = pass_attempt
                player.pass_int = pass_int
                player.rush_yards = rush_yards
                player.rush_tds = rush_tds
                player.fumbled = fumbled
                player.break_tackle = break_tackle 
                player.receptions = receptions
                player.receiving_yards = receiving_yards 
                player.receiving_tds = receiving_tds
                player.tackles = tackles
                player.tfl = tfl
                player.sacks = sacks
                player.interceptions = interceptions
                player.defensive_tds = defensive_tds
                player.forced_fumbles = forced_fumbles
                player.pass_defended = pass_defended
                

                return player
            })
        
        playersAvg.sort((a,b)=> (a[`${this.state.stat}`] < b[`${this.state.stat}`]) ? 1 : -1)
        
        // let moreThanTwoGames =  playersAvg.filter((player , i) => {
        //     return player.games_played > 2
        // })  
        

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
            this.setState({title:'Passing Yards', stat: 'pass_yards'})
        } else if(click ==='Passing TDs'){ 
            this.setState({title:'Passing TDs', stat: 'pass_td'})
        
        }else if(click ==='Times Sacked'){ 
            this.setState({title:'Times Sacked', stat: 'times_sacked'})
        }else if(click ==='Passes Completed'){ 
            this.setState({title:'Passes Completed', stat: 'pass_complete'})  
        }else if(click ==='Passes Attempted'){ 
            this.setState({title:'Passes Attempted', stat: 'pass_attempt'})  
        }else if(click ==='Interceptions Thrown'){ 
            this.setState({title:'Interceptions Thrown', stat: 'pass_int'})  
        }else if(click ==='Rushing Yards'){ 
            this.setState({title:'Rushing Yards', stat: 'rush_yards'})  
        }else if(click === 'Rushing TDs'){ 
            this.setState({title:'Rushing TDs', stat: 'rush_tds'})  
        }else if(click ==='Fumbles'){ 
            this.setState({title:'Fumbles', stat: 'fumbled'})  
        }else if(click ==='Broken Tackles'){ 
            this.setState({title:'Broken Tackles', stat: 'break_tackle' })  
        }else if(click ==='Receptions'){ 
            this.setState({title:'Receptions', stat: 'receptions'})  
        }else if(click ==='Receiving Yards'){ 
            this.setState({title:'Receiving Yards', stat: 'receiving_yards' })  
        }else if(click ==='Receiving TDs'){ 
            this.setState({title:'Receiving TDs', stat: 'receiving_tds'})  
        }else if(click ==='Tackles'){ 
            this.setState({title:'Tackles', stat: 'tackles'})  
        }else if(click ==='Tackles for Loss'){ 
            this.setState({title:'Tackles for Loss', stat: 'tfl'})  
        }else if(click ==='Sacks'){ 
            this.setState({title:'Sacks', stat: 'sacks'})  
        }else if(click === 'Interceptions'){ 
            this.setState({title: 'Interceptions', stat: 'interceptions'})  
        }else if(click ==='Defensive TDs'){ 
            this.setState({title:'Defensive TDs', stat: 'defensive_tds'})  
        }else if(click ==='Forced Fumbles'){ 
            this.setState({title:'Forced Fumbles', stat: 'forced_fumbles'})  
        }else if(click ==='Passes Defended'){ 
            this.setState({title:'Passes Defended', stat: 'pass_defended'})  
        } 
        
    }    
    render(){
         let performers = this.state.playersAvg.map((player, i) => {
             return(
                 <div key ={i} className='topPlayerGrid topPlayerGridAlign'>
                     <img className='topPic' src={player.photo_url}/>
                     <Link to={`player/${player.id}`}><h1>{player.name}</h1></Link>
                     <h1>{player[`${this.state.stat}`].toFixed(0)}</h1>
                     

                     
                 </div>
             )
         })

        

         
        return(
            <div className= 'topPerfomers'>
                <div className='bumper'>hi</div>
                <div className='bumper'>hi</div>
                <div className='bumper'>hi</div>
                <h1>{this.state.title}</h1>
                <PlayerStatDropDown updateStats = {this.updateStats}/>
                <div className='careerPlayerGrid'>
                    <div></div>
                    <h2>Name</h2>
                    <h2>{this.state.title}</h2>
                    
                </div>
                {performers}
            </div>
        )
    }
}

export default CareerStats