import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './SingleGame.css'
import PlayerStatDropDown from '../PlayerStatDropDown/PlayerStatDropDown'
 
class SingleGame extends React.Component{
    constructor(){
        super()

        this.state= {
            playerStats: [],
            players: [],
            playersAvg: [],
            stat: 'pass_yards',
            title: 'Passing Yards',
            updated: ''

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
        
        const {playerStats, players, playersAvg} = this.state
        
       if (playerStats.length >0 && players.length > 0){ 
        let nameStat = playerStats.map(stat => {
                
            let name = players.filter(player => {
                return stat.name === `https://maddenstats.herokuapp.com/players/${player.id}`
            })
           if(name.length > 0){
               stat.player = name[0].name
               stat.photo_url = name[0].photo_url
               stat.playerId = name[0].id
               return stat
           }
            
           
        })
        
        nameStat.sort((a,b)=> (a[`${this.state.stat}`] < b[`${this.state.stat}`]) ? 1 : -1)
        
       
        

        let topTen = nameStat.filter((player , i) => {
            return i <= 9
        })
        console.log(topTen)
        if(JSON.stringify(this.state.playersAvg) !== JSON.stringify(topTen)){    
            this.setState({playersAvg:topTen})
        }
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
            if(this.state.stat === 'sack'){ 
            return(
                 <div key ={i} className='careerPlayerGrid topPlayerGridAlign'>
                     <img className='topPic' src={player.photo_url}/>
                     <Link to={`player/${player.playerId}`}><h1>{player.player}</h1></Link>
                     <h1>{player[`${this.state.stat}`].toFixed(2)}</h1>
                     

                     
                 </div>
             )
            }else{
                return(
                    <div key ={i} className='careerPlayerGrid topPlayerGridAlign'>
                        <img className='topPic' src={player.photo_url}/>
                        <Link to={`player/${player.playerId}`}><h1>{player.player}</h1></Link>
                        <h1>{player[`${this.state.stat}`].toFixed(0)}</h1>
                        
   
                        
                    </div>
                )  
            }
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

export default SingleGame