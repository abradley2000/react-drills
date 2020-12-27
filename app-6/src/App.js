import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newItem: '',
      itemArray: []
    }
    this.addItem = this.addItem.bind(this)
  }
  changeItem(e) {
    this.setState({
      newItem: e
    })
  }
  addItem() {
    this.setState({
      itemArray: [...this.state.itemArray, this.state.newItem],
      newItem: ''
    })
  }
  render() {
    let list = this.state.itemArray.map(el => <Todo item={el}/>)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input placeholder='Enter new task' onChange={(e) => this.changeItem(e.target.value)} value={this.state.newItem}></input>
        <button onClick={this.addItem}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
