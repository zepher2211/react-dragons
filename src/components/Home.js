import React, { Component } from 'react'

class Home extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            Render Dragons Here
        </div>
        )
    }

}

export default Home