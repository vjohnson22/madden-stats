import React from 'react'


class Opponent extends React.Component{
    constructor(){
        super()

        this.state = {
            
        }
    }
    
    
    render(){
        let avg  

        
        if(this.props.gamestats !== undefined && this.props.againstCode ===""){
            let array = this.props.gamestats.filter( game => {
                if(game.against === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`){
                    return true
                }
            })
            let length = array.length
            
            let sum = 0 
            array.forEach(game => {
                    
                sum += game[`${this.props.stat}`]
            })
            let avgHolder = (sum/length)
            avg =avgHolder.toFixed(1)
        }else if(this.props.gamestats !== undefined && this.props.againstCode > 0){ 
            let array = this.props.gamestats.filter( game => {
                if(game.owner === `https://maddenstats.herokuapp.com/owners/${this.props.againstCode}` && game.against === `https://maddenstats.herokuapp.com/owners/${this.props.owner}` ){
                    return true
                }
            })
            let length = array.length
            
            let sum = 0 
            array.forEach(game => {
                    
                sum += game[`${this.props.stat}`]
            })
            let avgHolder = (sum/length)
            avg =avgHolder.toFixed(1)

        } 

        

        return(
            <div>
                <h2>{avg}</h2>      
            </div>
        )
    }
}

export default Opponent