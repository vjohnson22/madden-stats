import React from 'react'
import VsLineChart from '../VsLineChart/VsLineChart'
import axios from 'axios'




  




class TrendsContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            owner_games:[],
            game:[],
            gamestats:[],
            stats:'points',
            label:"",
            loading:[],
            playerData: [],
            againstData: []

        }
    }
    componentDidMount(){
        
        axios.get(`https://maddenstats.herokuapp.com/games`)
            .then(res => {
                this.setState({game:res.data})
            })
            .then(() => {
                 
            let games = this.state.game.filter( game => {
                        if (game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` || game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`){
                            return true
                        } 
                    })            
                   
                           
            let weekLabel = games.map( game => {
                return `Week ${game.week}, ${game.season}`
                    })

                    
                this.setState({label:weekLabel})
                    this.setState({loading:[1]})
                })
        axios.get('https://maddenstats.herokuapp.com/gamestats/')
            .then(res => {
                res.data.sort((a,b)=> (a.id > b.id) ? 1 : -1)
                this.setState({gamestats:res.data})
            })
                        
                        
            
            
                
             
                    
    
        }
    
componentDidUpdate() {
 if (this.props.versus !== "All" ){
       let games = this.state.game.filter( game => {
                    if ((game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}`)||(game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}` && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.id}`)){
                        return true
                    } 
                })

                let weekLabel = games.map( game => {
                    return `Week ${game.week}, ${game.season}`
                })
                
                if (JSON.stringify(this.state.label) !== JSON.stringify(weekLabel)){
                    this.setState({label:weekLabel})
                }
                
                
             
                
            }
            
if( this.state.playerData.length === 0){
            let playerStats = this.state.gamestats.filter(stats => { 
                
                return stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.id}`
            })                                                                    
            .map(stats =>{
                
                return stats[`${this.state.stats}`]
            })
            if (JSON.stringify(this.state.playerData) !== JSON.stringify(playerStats)){
                    this.setState({playerData:playerStats})
            }
            
            let againstStats = this.state.gamestats.filter(stats => {
                return stats.against === `https://maddenstats.herokuapp.com/owners/${this.props.id}`
            })
            .map(stats =>{
                        return stats[`${this.state.stats}`]
            })
            if (JSON.stringify(this.state.againstData) !== JSON.stringify(againstStats)){
                this.setState({againstData:againstStats})
            }
            
}

if (this.props.versus !== "All" ){
    let playerStats = this.state.gamestats.filter(stats => { 
                
        return (stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && stats.against === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}`)
    })                                                                    
    .map(stats =>{
        
        return stats[`${this.state.stats}`]
    })
    if (JSON.stringify(this.state.playerData) !== JSON.stringify(playerStats)){
            this.setState({playerData:playerStats})
    }
    
    let againstStats = this.state.gamestats.filter(stats => {
        return (stats.against === `https://maddenstats.herokuapp.com/owners/${this.props.id}` && stats.owner === `https://maddenstats.herokuapp.com/owners/${this.props.versusCode}`)
    })
    .map(stats =>{
                return stats[`${this.state.stats}`]
    })
    if (JSON.stringify(this.state.againstData) !== JSON.stringify(againstStats)){
        this.setState({againstData:againstStats})
    }

}

                        
}
    

    render(){
        
         
        let chart = this.state.loading.map( load => {
            return <VsLineChart name={this.props.name} versus = {this.props.versus} label= {this.state.label} playerStats={this.state.playerData} againstStats = {this.state.againstData}/> 
            //   statsToTrend={this.state.stats}/>
        })

        return(
            <div>
                {chart}
            </div>
        )
    }
}

export default TrendsContainer