import React from 'react'
import axios from 'axios'
import WinsVsLosses from '../WinsVsLosses/WinsVsLosses'


class HeadToHeadStats extends React.Component{
    constructor(){
        super()

        this.state = {
            data: [],
            winTotal:0
        }
    }
    
    // componentDidMount(){
    //     axios.get('https://maddenstats.herokuapp.com/gamestats/')
    //         .then(res => {
    //             this.setState({data:res.data})
    //         })
   
                
    //     }

    render(){
    //     let wins = 0
    //     if(this.props.games === undefined){

    //     }else{
    //        let winsArray = this.props.data.filter( game => {
    //             if(this.props.againstName === 'All' && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`){
    //                 return true
    //         }
    //     })
    //     wins = winsArray.length
    // }

        
        // let wins = this.props.data.filter( game => {
        //     if(this.props.againstName === 'All' && game.won === `https://maddenstats.herokuapp.com/owners/${this.props.owner}`){
        //         return true
        //     }
    //     })        
    // console.log(wins)    
       
    //    this.setState({winTotal:wins.length}) 

        return(
            <div>
                <div>{this.props.owner}</div>
                <div>{this.props.against}</div>
                {/* <WinsVsLosses against = {this.props.againstName} wins= {this.wins}/> */}
                <h1>Record Against {this.props.againstName}: {this.wins}</h1>
            </div>
        )
    }
}

export default HeadToHeadStats