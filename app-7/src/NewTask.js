import React, {Component} from 'react';

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            newItem: '',
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    changeItem(e) {
        this.setState({
          newItem: e
        })
    }
    handleAdd() {
        this.props.add(this.state.newItem)
        this.setState({
            newItem: ''
        })
    }
    render() {
        return (
            <div>
                <input placeholder='Enter new task' onChange={(e) => this.changeItem(e.target.value)} value={this.state.newItem}></input>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;