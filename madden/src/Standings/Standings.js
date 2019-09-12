import React from 'react'

class Standings extends React.Component{
    render() {
        let results = this.props.owners.map( (owner, i) => {
            return(
                <li key={i}>{owner.name}</li>
                
            )
        })
        return(
            <div>
                {results}
            </div>
        )
    }
}

export default Standings