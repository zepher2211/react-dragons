import React from 'react'

export default class DragonCard extends React.Component{


    render(){

        return(
            <div className="ui card" onClick={() => this.props.patchWarStatus(this)}>
                <img className="ui image" src={this.props.image} alt={this.props.name} />
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
            </div>
        )

    }

}