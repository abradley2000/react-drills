import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: '',
      foodArray: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }
  changeFilter(e) {
    this.setState({
      filter: e
    })
  }
  render() {
    const listItems = this.state.foodArray.filter(el => el.includes(this.state.filter)).map(el => <h2>{el}</h2>)
    return (
      <div className="App">
        <input onChange={(e) => this.changeFilter(e.target.value)}></input>
        <p>{listItems}</p>
      </div>
    );
  }
}

export default App;
