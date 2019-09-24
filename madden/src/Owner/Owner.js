import React from 'react'
import axios from 'axios'
import HeadToHeadContainer from '../HeadToHeadContainer/HeadToHeadContainer'


class Owner extends React.Component{
    constructor(){
        super()

        this.state = {
            
        }
    }
    componentDidMount(){
        
        // gets owner detail and passes down to props for head to head container
        axios.get(`https://maddenstats.herokuapp.com${this.props.location.pathname}`)
            .then(res => this.setState({...res.data}))
            
    }
    
    render() {
        
        return(
            <div>
                <div>
                    <h1>{this.state.name}</h1>
     
                    <HeadToHeadContainer {...this.state} gamestats= {this.props.gamestats} games = {this.props.games}/>
                </div>
                
            </div>
        )
    }
}

export default Owner