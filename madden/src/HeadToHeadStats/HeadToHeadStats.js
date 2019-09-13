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
        this.setState({against:this.props.againstCode})
    }
    
    render(){
          


        

        return(
            <div>
                <div>{this.props.owner}</div>
                <div>{this.props.against}</div>
                {/* <WinsVsLosses against = {this.props.againstName} wins= {this.wins}/> */}
                <h1>Record Against {this.props.versusName}: {this.props.wins}-{this.props.losses}</h1>
            </div>
        )
    }
}

export default HeadToHeadStats