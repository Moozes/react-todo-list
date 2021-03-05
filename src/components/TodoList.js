import {Component} from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items} = this.props;
        return(
            <div className="todo-list">
                <h3>Todo List</h3>
                {items.map(item => (
                    <TodoItem  
                        key={item.id} 
                        item={item} 
                        deleteItem={() => {this.props.deleteItem(item.id)}}
                        editItem={() => {this.props.editItem(item.id)}}
                        editMode={this.props.editMode}
                        id={this.props.id}
                    />
                ))}
                <button
                    onClick={this.props.clearList}
                >Clear List</button>
            </div>
        );
    }
}