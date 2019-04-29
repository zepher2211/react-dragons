import React, { Component } from 'react'
import DragonCard from './dragonCard';

class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
                <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                    <div className='header'>
                        <h1>War</h1>
                    </div>
                    <div className="ui cards">
                        {this.props.dragons.filter(dragon => dragon.atWar).map(dragon => <DragonCard {...dragon} />)}
                    </div>
                </div>
        )
    }

}

export default War