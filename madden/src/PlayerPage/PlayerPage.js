import React from 'react'
import Players from '../Players/Players'

class PlayerPage extends React.Component {
    constructor() {
        super()

        this.state={
            search:""
        }
    }
    searchName = (e) => {
        this.setState({search: e.target.value})
        
      } 
    render(){
       
        
        return(
            <div>
                <div>
                    <input placeholder='Player Search' onChange={this.searchName} value={this.state.search}/>
                </div>
                <Players search={this.state.search}/>
            </div>
        )
    }
}

export default PlayerPage