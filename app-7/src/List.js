import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render() {
        let list = this.props.itemArray.map(el => <Todo item={el}/>)
        return(
            <div>{list}</div>
        )
    }
}

export default List;