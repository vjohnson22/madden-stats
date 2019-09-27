import React from 'react';
import axios from 'axios'
import './Dropdown.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       owners: [],
       versus:"",
       gamestats:[]
     };
    }

 
componentDidMount(){
    axios.get('https://maddenstats.herokuapp.com/owners/')
        .then( res => {
            // let ownerNames = res.data.map( owner => {
            //     return owner.name
            // })
            this.setState({owners:res.data})
        })
    axios.get('https://maddenstats.herokuapp.com/gamestats/')
      .then(res => {
        this.setState({gamestats: res.data})
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

  componentWillUpdate() {
    let playedAgainst = this.state.gamestats.filter( game => {
      return game.owner === `https://maddenstats.herokuapp.com/owners/${this.props.id}`
    })
    .map( game => {
      return game.against[game.against.length - 1]
    }) 
    // let played = new Set (playedAgainst) 
    // console.log(played)
    let ownerList = []
    if(this.state.owners.length > 0){
       ownerList = this.state.owners.filter(owner => {
        
        if(playedAgainst.includes(owner.id.toString())){
          return true
        }
      
    
      
    })
    if(JSON.stringify(this.state.owners) !== JSON.stringify(ownerList)){
      this.setState({owners:ownerList})
    } 
  } 
  }
  render() {
      let owners = this.state.owners.map( (owner, i) => {
        return <li key={i} onClick={this.props.updateVersus} >{owner.name}</li>
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