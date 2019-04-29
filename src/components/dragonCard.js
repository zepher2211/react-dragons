import React from 'react'

export default class DragonCard extends React.Component{

    render(){

        return(
            <div className="ui card">
                <img className="ui image" src={this.props.image} alt={this.props.name} />
                <h3>{this.props.name}</h3>
            </div>
        )

    }

}