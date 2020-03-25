import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SimpleTween from "./simple-tween.js";
import MyFirstTween from './MyFirstTween'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <MyFirstTween />
      </div>
    );
  }
}

export default App