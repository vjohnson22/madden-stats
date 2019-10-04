import React from 'react';
import './PlayerStatDropDown.css';


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
    let data = ['Passing Yards','Passing TDs','Times Sacked', 'Passes Completed', 'Passes Attempted','Interceptions Thrown', 'Rushing Yards', 'Rushing TDs', 'Fumbles', 'Broken Tackles', 'Receptions', 'Receiving Yards', 'Recieving TDs', 'Tackles', 'Tackles for Loss', 'Sacks', 'Interceptions', 'Defensive TDs', 'Forced Fumbles', 'Passes Defended'
        

    ]
    
    let dropdown = data.map( (datum, i) => {
        return <li key={i} onClick={this.props.updateStats}>{datum}</li>
      })
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Statistics </div>

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