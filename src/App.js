import {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {v4 as uuidv4} from 'uuid';
// App state = items, id, item, editItem.   handleCange, handleSubmit, clearList, handleDelete
//   TodoInput
//   TodoList
//    TodoItem

class App extends Component {
  state = {
    items : [],
    title : '',
    id : uuidv4(),
    editMode : false
  }

  handleChange = e => {
    this.setState({
      title : e.target.value
    })
  }

  addItem = () => {
    if(this.state.title) {
      const newItem = {
        id : this.state.id,
        title : this.state.title
      }

      if(this.state.editMode) {
        const index = this.state.items.findIndex((currentValue) => currentValue.id == this.state.id);
        const newItems = this.state.items;
        newItems[index] = newItem;
        this.setState({
          items : newItems,
          title : '',
          id : uuidv4(),
          editMode : false
        })
      } else {
        this.setState((prev) => ({
          items : prev.items.concat(newItem),
          title : '',
          id : uuidv4(),
          editMode : false
        }))
      }
    }
  }

  deleteItem = id => {
    const newItemList = this.state.items.filter(item => item.id != id);
    this.setState({
      items : newItemList
    })
  }

  clearList = () => {
    this.setState({
      items : [],
      title : '',
      id : uuidv4(),
      editMode : false
    })
  }

  editItem = id => {
    const itemToBeEdited = this.state.items.filter(item => item.id == id)[0]

    this.setState({
      title : itemToBeEdited.title,
      id : itemToBeEdited.id,
      editMode : true
    })
  }

  render() {
    return (
      <div className="container">
        <TodoInput 
          title={this.state.title} 
          editMode={this.state.editMode}  
          handleChange={this.handleChange}
          addItem={this.addItem}
        />
        <TodoList  
          items={this.state.items} 
          clearList={this.clearList}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          editMode={this.state.editMode}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default App;