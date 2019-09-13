import React from 'react'
import axios from 'axios'
import HeadToHeadContainer from '../HeadToHeadContainer/HeadToHeadContainer'

class Owner extends React.Component{
    constructor(){
        super()

        this.state = {}
    }
    componentDidMount(){
        axios.get(`https://maddenstats.herokuapp.com${this.props.location.pathname}`)
            .then(res => this.setState({...res.data}))
        // axios.get('https://maddenstats.herokuapp.com/gamestats/')
        //     .then(res => {
        //         this.setState({gamestats:res.data})
        //     })
        // axios.get('https://maddenstats.herokuapp.com/games/')
        //    .then(res => {
        //         this.setState({games:res.data})
        //     })    
    }
    render() {
        
        return(
            <div>
                <h1>{this.state.name}</h1>
                <HeadToHeadContainer {...this.state} gamestats={this.props.gamestats} games = {this.props.games}/>
            </div>
        )
    }
}

export default Owner