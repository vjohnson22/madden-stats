import React from 'react'
import axios from 'axios'
// import Standings from '../Standings/Standings'
import './Standings.css'
import {Link} from 'react-router-dom'
class Standings extends React.Component{
    constructor(){
        super()

        this.state = {
            owners:[],
            season:[],
            

            
            

        }
    }
    componentDidMount() {
        axios.all([
            axios.get('https://maddenstats.herokuapp.com/owners/'),
            axios.get('https://maddenstats.herokuapp.com/seasonstats')
        ])
            .then(res => {

                
                let ownerRecords = res[0].data.map( (owner,i) => {
                    owner.winNumber = owner.wins.length
                    owner.lossNumber = owner.losses.length
                    owner.winPercent = owner.winNumber/(owner.winNumber+owner.lossNumber)
                    owner.division = ''
                    owner.conference =''
                    owner.superbowl = ''
                    return owner
                    
                })
                
                ownerRecords.sort((a,b)=> (a.winPercent < b.winPercent) ? 1 : -1)
                this.setState({owners:ownerRecords,season:res[1].data})
            
                
                
            })
            
    }

    componentDidUpdate() {

        let updated = this.state.owners.map( owner => {
            let superbowl = 0
            let conference = 0
            let division = 0
            let seasons = this.state.season.filter(season => {
                
                return season.owner === `https://maddenstats.herokuapp.com/owners/${owner.id}`
                
            })
            .forEach(season =>{
                superbowl += season.superbowl
                conference += season.conference
                division = season.division
            })

            owner.superbowl = superbowl
            owner.conference = conference
            owner.division = division
            return owner
            })

            
    
        
}
        
    
    
    render() {
        
        let loading = ['Loading...']
        let results   
        if(this.state.owners.length === 0 ){
             results = loading.map( (loading , i) => {
                return(
                    <div>
                        <h1 className = 'loading'>{loading}</h1>
                    </div>
                )
             })
        }else{ 
            
        results = this.state.owners.map( (owner, i) => {
        
            return (
                <div className = 'grid'>
                    <img className = 'image' src = {owner.photo_url}></img>
                    <Link to={`/owners/${owner.id}`} ><h2>{owner.name}</h2></Link>
                    <h2>{owner.winPercent.toFixed(2)}</h2>
                    <h2>{owner.winNumber}</h2>
                    <h2>{owner.lossNumber}</h2>
                    <h2>{owner.superbowl}</h2>
                    <h2 className= 'extra'>{owner.conference}</h2>
                    <h2 className= 'extra'>{owner.division}</h2>
                </div>
            )

        })
    }
        
        
        
        

        return(
            <div className= 'body'>
                <div className = 'bumper'>hi</div>
                <div className = 'grid'>
                    <h2>Team</h2>
                    <h2>Owner</h2>
                    <h2>Win Percentage</h2>
                    <h2>Wins</h2>
                    <h2>Losses</h2>
                    <h2>Super Bowls</h2>
                    <h2 className= 'extra'>Conferences</h2>
                    <h2 className= 'extra'>Divisions</h2>
                </div>       
                {results}
                <div className = 'bottomBumper'>hi</div>
                

            </div>
        )
    }
}

export default Standings