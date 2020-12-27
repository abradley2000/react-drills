import React, {Component} from 'react';
import './App.css';
import Todo from './Todo';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      itemArray: []
    }
    this.addItem = this.addItem.bind(this)
  }
  addItem(item) {
    this.setState({
      itemArray: [...this.state.itemArray, item],
    })
  }
  render() {

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addItem}/>
        <List itemArray={this.state.itemArray}/>
      </div>
    );
  }
}

export default App;