/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 1.0.0
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import readable from './readable-number.js';


let CalcInput = React.createClass({
  getInitialProps(){
    return{
      initValue: 0
    }
  },

  componentDidMount(){
    let el = ReactDOM.findDOMNode(this)
    el.value = readable.read(this.props.initValue)
  },

  render(){
    return(
      <input type="text" onInput={ this.handleChange }/>
    )
  },

  handleChange(e){
    let val = e.target.value
    e.target.value = readable.read(val)
    this.props.onChange(readable.write(val))
  }

})

export default CalcInput;
