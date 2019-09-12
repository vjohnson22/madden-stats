import React from 'react'

class HeadToHeadStats extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.owner}</div>
                <div>{this.props.against}</div>
            </div>
        )
    }
}

export default HeadToHeadStats