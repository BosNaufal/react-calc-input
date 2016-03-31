
import React from 'react';
import ReactDOM from 'react-dom';

import CalcInput from './react-calc-input.js';


let App = React.createClass({

  getInitialState(){
    return {
      model: 1000
    }
  },

  render() {
    return (
      <div>
        <h1>Calc Input Component</h1>
        <p>Try to type 10,000 without comma</p>
        <CalcInput
          onChange={ this.modelChanged }
          initValue={ this.state.model }/>

        <p>Your State Get: { this.state.model } ({ typeof this.state.model })</p>
      </div>
    )
  },

  modelChanged(val){
    this.setState({
      model: val
    })
  }

})


ReactDOM.render(<App />, document.getElementById("app"))
