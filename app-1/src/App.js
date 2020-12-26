import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  changeFunc(e) {
    this.setState({
      text: e
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={(e) => {this.changeFunc(e.target.value)}}></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
