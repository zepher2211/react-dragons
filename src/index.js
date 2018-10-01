import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

class Form extends React.Component {

    state = {
        newCocktail: {
            name: '',
            description: '',
            instructions: '',
            proportions: [ {
                amount:'',
                ingredient: ''
            } ]
        }
    }
  
    handleForm = e => {
        console.log(this.state.newCocktail)
    };

    updateField = (field, e) => {
        //this.setState({ newCocktail: { ...this.state.newCocktail, [field]: e.target.value }})
        let value = e.target.value
        this.setState( state => {
            state.newCocktail[field] = value
            return state
        })
    }

    updateProportionField = (index, field, e) => {
        //this.setState({ newCocktail: { ...this.state.newCocktail, [field]: e.target.value }})
        let value = e.target.value
        this.setState( state => {
            state.newCocktail.proportions[index][field] = value
            return state
        })
    }

    addProportions = e => {
        // this.setState({ 
        //     newCocktail: { 
        //         ...this.state.newCocktail, 
        //         proportions:[ 
        //             ...this.state.newCocktail.proportions, 
        //             { amount:'', ingredient:' '}
        //         ] 
        //     } 
        // })

        this.setState( state => {
            state.newCocktail.proportions.push({ amount:'', ingredient:'' })
            return state
        })
    }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <label>Name</label>
          <input onInput={e => this.updateField('name', e)} type="text" />
        </div>
        <div>
          <label>Description</label>
          <input onInput={e => this.updateField('description', e)} type="text" />
        </div>
        <div>
          <label>Instructions</label>
          <input onInput={e => this.updateField('instructions', e)} type="text" />
        </div>
        <h3>Proportions</h3>
        <div>
            {this.renderProportions()}
            <button onClick={this.addProportions}>+</button>
        </div>
        <button onClick={this.handleForm}>Submit</button>
      </div>
    );
  }

  renderProportions(){
    return this.state.newCocktail.proportions.map( (proportion, index) => {
        return (
            <div>
                <div>
                    <label>Amount</label>
                    <input onInput={e => this.updateProportionField(index, 'amount', e)} type="text"/>
                </div>
                <div>
                    <label>Ingredient</label>
                    <input onInput={e => this.updateProportionField(index, 'ingredient', e)} type="text" />
                </div>
            </div>
        )
    })
  }
}


ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();
