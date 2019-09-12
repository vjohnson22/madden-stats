import React from 'react'
import axios from 'axios'
import Standings from '../Standings/Standings'

class StandingsContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            owners: []
        }
    }
    
    componentDidMount(){
        axios.get('https://maddenstats.herokuapp.com/owners/')
            .then( response => {
                this.setState({owners:response.data})
                
            })
    }
    
    render(){
        return(
            <div>
                <Standings owners = {this.state.owners}/>
            </div>
        )
    }
}

export default StandingsContainer