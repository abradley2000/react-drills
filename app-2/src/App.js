import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayArray: ['one', 'two', 'three', 'four', 'five']
    }
  }
  render() {
    const listItems = this.state.displayArray.map(el => <h2>{el}</h2>)
    return (<div className="App">{listItems}</div>)
  }
}

export default App;
