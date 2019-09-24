import React from 'react';
import axios from 'axios'
import './Dropdown.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       owners: []
     };

  

};
componentDidMount(){
    axios.get('https://maddenstats.herokuapp.com/owners/')
        .then( res => {
            let ownerNames = res.data.map( owner => {
                return owner.name
            })
            this.setState({owners:ownerNames})
        })
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
      let owners = this.state.owners.map( (owner, i) => {
        return <li key={i} onClick={this.props.updateVersus} value={owner}>{owner}</li>
      })
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Played Against </div>

          { this.state.displayMenu ? (
          <ul>
              <li>All</li>
         {/* <li><a className="active" href="#Create Page">Create Page</a></li>
         <li><a href="#Manage Pages">Manage Pages</a></li>
         <li><a href="#Create Ads">Create Ads</a></li>
         <li><a href="#Manage Ads">Manage Ads</a></li>
         <li><a href="#Activity Logs">Activity Logs</a></li>
         <li><a href="#Setting">Setting</a></li>
         <li><a href="#Log Out">Log Out</a></li> */}
            {owners}
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

export default Dropdown;