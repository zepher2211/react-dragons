import React, { Component } from 'react'
import DragonCard from './dragonCard';

class Home extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <div className='header'>
                <h1>Home</h1>
            </div>
            <div className="ui cards">
                {this.props.dragons.filter(dragon => !dragon.atWar).map(dragon => <DragonCard {...dragon} />)}
            </div>
        </div>
        )
    }

}

export default Home