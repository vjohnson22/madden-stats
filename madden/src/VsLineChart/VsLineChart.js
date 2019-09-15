import React from 'react'
import {Line} from 'react-chartjs-2'

class VsLineChart extends React.Component{
    constructor() {
        super()

        this.state={
            labels:[],
            playerData:[],
            againstData:[]
            
            
        }
    }
    componentDidMount(){
        if (this.props.labels !== undefined){
            this.setState({labels:this.props.label})
        }else{
            this.setState({labels: ['in progress']})
        }

        if (this.props.playerStats !== undefined){
            this.setState({playerData:this.props.playerStats})
        }else{
            this.setState({playerData: [0]})
        } 
        if (this.props.againstStats !== undefined){
            this.setState({againstData:this.props.againstStats})
        }else{
            this.setState({againstData: [0]})
        }
    }            
    render(){
        // console.log(this.props.playerStats)
        let labels  
        let playerData  
        let againstData  
        
        if (this.props.playerStats === undefined || this.props.againstStats === undefined || this.props.label === undefined ){
            labels = this.state.labels
            playerData = this.state.playerData
            againstData = this.state.againstData
            
        }else {
            labels = this.props.label
            playerData = this.props.playerStats
            againstData = this.props.againstStats
        }
        // console.log(this.state.againstData)       
        
        
        var data = {
            labels: labels,
            datasets: [{
                label: this.props.name,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(225,0,0,0.4)",
                borderColor: "red", // The main line color
                borderCapStyle: 'square',
                borderDash: [], // try [5, 15] for instance
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "black",
                pointBackgroundColor: "white",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "yellow",
                pointHoverBorderColor: "brown",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                // notice the gap in the data and the spanGaps: true
                data: playerData,
                spanGaps: true,
              }, {
                label: this.props.versus,
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(167,105,0,0.4)",
                borderColor: "rgb(167, 105, 0)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "white",
                pointBackgroundColor: "black",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "brown",
                pointHoverBorderColor: "yellow",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                // notice the gap in the data and the spanGaps: false
                data: againstData,
                spanGaps: false,
              }
          
            ]
          };
          
          // Notice the scaleLabel at the same level as Ticks
          var options = {
            scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          },
                          scaleLabel: {
                               display: true,
                               labelString: 'Moola',
                               fontSize: 20 
                            }
                      }]            
                  }  
          };
        return(
            <div>
              <Line data = {data}/>
            </div>
        )
    }
}


export default VsLineChart