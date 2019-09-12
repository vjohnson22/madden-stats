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
    }
    render() {
    
        return(
            <div>
                <h1>{this.state.name}</h1>
                <HeadToHeadContainer id={this.state.id}/>
            </div>
        )
    }
}

export default Owner