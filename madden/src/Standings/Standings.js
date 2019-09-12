import React from 'react'
import StandingsTable from '../StandingsTable/StandingsTable'

let sortedResults

class Standings extends React.Component{
    constructor(){
        super()

        this.state = {
            owners:[]
        }
    }

    
    render() {
        let results = this.props.owners.map( (owner, i) => {
            owner.winNumber = owner.wins.length
            owner.lossNumber = owner.losses.length
            owner.winPercent = owner.winNumber/(owner.winNumber+owner.lossNumber)
            return owner
            

        })
        
        
        
        
        

        return(
            <div>
                <StandingsTable results ={results} />
            </div>
        )
    }
}

export default Standings