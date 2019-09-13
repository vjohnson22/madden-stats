import React from 'react'
import axios from 'axios'
import WinsVsLosses from '../WinsVsLosses/WinsVsLosses'


class HeadToHeadStats extends React.Component{
    constructor(){
        super()

        this.state = {
            owner:"",
            against:"",
            againstName:"",
            wins:""
        }
    }
    componentDidMount(){
        
    }
    
    render(){
        let wins
        let losses

        if (this.props.games === undefined){
            wins = 0
        }else{
            let winArray = this.props.games.filter( game => {
                if(game.won === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`){
                    return true
                }
            })
            wins = winArray.length     
        }
        
        if (this.props.games === undefined){
            losses = 0
        }else{
            let lossArray = this.props.games.filter( game => {
                if(game.lost === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`){
                    return true
                }
            })
            losses = lossArray.length     
        }
        


        

        return(
            <div>
                <div>{this.props.owner}</div>
                <div>{this.props.against}</div>
                {/* <WinsVsLosses against = {this.props.againstName} wins= {this.wins}/> */}
                <h1>Record Against {this.props.againstName}: {wins}-{losses}</h1>
            </div>
        )
    }
}

export default HeadToHeadStats