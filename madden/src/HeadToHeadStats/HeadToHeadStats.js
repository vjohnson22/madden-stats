import React from 'react'
import axios from 'axios'
import WinsVsLosses from '../WinsVsLosses/WinsVsLosses'


class HeadToHeadStats extends React.Component{
    constructor(){
        super()

        this.state = {
            
        }
    }
    
    
    render(){
        let avg  

        
        if(this.props.gamestats !== undefined && this.props.againstCode ===""){
            let array = this.props.gamestats.filter( game => {
                if(game.owner === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`){
                    return true
                }
            })
            let length = array.length
            
            let sum = 0 
            array.forEach(game => {
                    
                sum += game[`${this.props.stat}`]
            })
            avg = sum/length
        }else if(this.props.gamestats !== undefined && this.props.againstCode > 0){ 
            let array = this.props.gamestats.filter( game => {
                if(game.owner === `https://maddenstats.herokuapp.com/owners/${this.props.owner}` && game.against === `https://maddenstats.herokuapp.com/owners/${this.props.againstCode}` ){
                    return true
                }
            })
            let length = array.length
            
            let sum = 0 
            array.forEach(game => {
                    
                sum += game[`${this.props.stat}`]
            })
            avg = sum/length
        } 

        

        return(
            <div>
                <h2>{avg}</h2>      
            </div>
        )
    }
}

export default HeadToHeadStats