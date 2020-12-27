import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return (
            <h2>{this.props.item}</h2>
        )
    }
}

export default Todo;