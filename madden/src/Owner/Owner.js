import React from 'react'
import axios from 'axios'
import Dropdown from '../Dropdown/Dropdown'
import HeadToHeadContainer from '../HeadToHeadContainer/HeadToHeadContainer'


class Owner extends React.Component{
    constructor(){
        super()

        this.state = {
            versus:""
        }
    }
    componentDidMount(){
        
        // gets owner detail and passes down to props for head to head container
        axios.get(`https://maddenstats.herokuapp.com${this.props.location.pathname}`)
            .then(res => this.setState({...res.data}))
            
    }
    updateVersus=(e) => {
        e.preventDefault()
        let click = e.target.value
        this.setState({versus: click})
    }
    render() {
        
        return(
            <div>
                <div>
                    <h1>{this.state.name}</h1>
                    <Dropdown updateVersus={this.updateVersus}/>
                    <HeadToHeadContainer {...this.state} gamestats= {this.props.gamestats} games = {this.props.games}/>
                </div>
                
            </div>
        )
    }
}

export default Owner