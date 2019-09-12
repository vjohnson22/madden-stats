import React from 'react'
import axios from 'axios'

class HeadToHeadContainer extends React.Component{
    componentDidMount(){
        axios.get('https://maddenstats.herokuapp.com/games/')
            .then(res => {
                console.log(res)
            })
    }
    
    render(){
        return(
            <div>
                {this.props.id}
            </div>
        )
    }
}

export default HeadToHeadContainer