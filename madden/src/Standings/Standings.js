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
            

        }
    }
    componentDidMount() {
        axios.get('https://maddenstats.herokuapp.com/owners/')
            .then(res => {
                let ownerRecords = res.data.map( (owner,i) => {
                    owner.winNumber = owner.wins.length
                    owner.lossNumber = owner.losses.length
                    owner.winPercent = owner.winNumber/(owner.winNumber+owner.lossNumber)
                    return owner
                })
                ownerRecords.sort((a,b)=> (a.winPercent < b.winPercent) ? 1 : -1)
                this.setState({owners:ownerRecords})
            })
    }

    componentDidUpdate() {
        
        
    }
    
    render() {
        let results = this.state.owners.map( (owner, i) => {
        
            return (
                <div className = 'grid'>
                    <img className = 'image' src = {owner.photo_url}></img>
                    <Link to={`/owners/${owner.id}`} ><h2>{owner.name}</h2></Link>
                    <h2>{owner.winPercent.toFixed(2)}</h2>
                    <h2>{owner.winNumber}</h2>
                    <h2>{owner.lossNumber}</h2>
                </div>
            )

        })
        
        
        
        

        return(
            <div className= 'body'>
                <div className = 'grid'>
                    <h2>Team</h2>
                    <h2>Owner</h2>
                    <h2>Win Percentage</h2>
                    <h2>Wins</h2>
                    <h2>Losses</h2>
                </div>       
                {results}
            </div>
        )
    }
}

export default Standings