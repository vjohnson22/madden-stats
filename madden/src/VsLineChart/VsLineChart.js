import React from 'react'
import {Line} from 'react-chartjs-2'



  




class VsLineChart extends React.Component{
    render(){
        let labels
        if(this.props.label === undefined){
            labels = []
        } else {
            labels = this.props.label
        }

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
                data: [65, 59, 80, 81, 56, 55, 40, ,60,55,30,78],
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
                data: [10, 20, 60, 95, 64, 78, 90,,70,40,70,89],
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