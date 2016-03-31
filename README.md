# React Calc Input
A [React](http://https://facebook.github.io/react/) Component to make a calculator input behavior. Implementation of [readable-number.js](https://github.com/BosNaufal/readable-number)


#### [DEMO](https://rawgit.com/BosNaufal/react-calc-input/master/index.html)
#### [codepen](http://codepen.io/BosNaufal/pen/PNGWgQ)


## Install
Include [react-calc-input.js](./src/react-calc-input.js) to your web App file.


## Usage
```js

import React from 'react';
import ReactDOM from 'react-dom';

import CalcInput from './path/to/react-calc-input.js';


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

```


## Thank You for Making it become useful
Hopefully it can be useful for your next projects.

## Let's talk about some projects
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
