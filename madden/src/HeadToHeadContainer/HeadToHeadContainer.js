import React from 'react'
import axios from 'axios'
import HeadToHeadStats from '../HeadToHeadStats/HeadToHeadStats'

class HeadToHeadContainer extends React.Component{
    constructor(){
        super()

        this.state={
            data:[],
            versus:"",
            versusCode:"",
            versusName:'All'
        }
    }
    updateVersus = (e) => {
        this.setState({versus:e.target.value})
    }
    findPlayer = (e) => {
        e.preventDefault()
        if(this.state.versus.toLowerCase() === 'vic'){
            this.setState({versusCode:1, versusName: "Vic"})
            
        } else if (this.state.versus.toLowerCase() === 'dennis'){
            this.setState({versusCode:2, versusName: "Dennis"})
        } else if (this.state.versus.toLowerCase() === 'dj'){
            this.setState({versusCode:3, versusName: "DJ"})
        } else if (this.state.versus.toLowerCase() === 'reggie'){
            this.setState({versusCode:4, versusName: "Reggie"})
        } else if (this.state.versus.toLowerCase() === 'arwin'){
            this.setState({versusCode:5, versusName: "Arwin"})
        } else if (this.state.versus.toLowerCase() === 'jay'){
            this.setState({versusCode:6, versusName: "Jay"})
        } else {
            alert('Invalid name')
    }
}

    // componentDidMount(){
    //     axios.get('https://maddenstats.herokuapp.com/games/')
    //         .then(res => {
    //             this.setState({data:res.data})
    //         })
    // }
        
    render(){
        
        return(
            <div>
                <input placeholder="Versus?" value={this.state.versus} onChange={this.updateVersus}/> 
                <button onClick={this.findPlayer}>Submit</button>
                <HeadToHeadStats data = {this.state.data} owner={this.props.id} againstCode = {this.state.versusCode} againstName = {this.state.versusName}/>
            </div>
        )
    }
}

export default HeadToHeadContainer