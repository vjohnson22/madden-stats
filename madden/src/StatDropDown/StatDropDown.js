import React from 'react';
import axios from 'axios'
import './StatDropDown.css';


class StatDropDown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       
     }
    }



showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  
   
 
  render() {
    let data = [
        {
            name: 'points',
            displayName: 'Points Per Game',
            titleName: 'PPG'
        },
        {
            name: 'off_yards_gained',
            displayName: 'Total Offense',
            titleName: 'Total Offense'
        },
        {
            name: 'pass_yards',
            displayName: 'Passing Yards',
            titleName: 'Passing Yards'
        },
        {
            name: 'rush_yards',
            displayName: 'Rushing Yards',
            titleName: 'Rushing Yards'
        },
        {
            name: 'first_downs',
            displayName: 'First Downs',
            titleName: 'First Downs'
        },
        {
            name: 'turnovers',
            displayName: 'Turnovers',
            titleName: 'Turnovers'
        },
    ]
    
    let dropdown = data.map( (datum, i) => {
        return <li key={i} onClick={this.props.updateStats}>{datum.displayName}</li>
      })
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Trend Statistics </div>

          { this.state.displayMenu ? (
          <ul>
              {dropdown}
         
         
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default StatDropDown;