import {useState} from 'react';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import TodoList from './components/TodoList';
import Form from './components/Form';
// try to use CssBaseline

// App state = todos
//   header
//   Form addTodo
//   todoList
//     todo deleteTodo, editTodo
//   footer

export default function App(props) {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : 'barry lkalb'
    },
    {
      id : 2,
      text : 'haroune milkshake'
    }
  ])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(elm => elm.id !== id))
  }

  const editTodo = newTodo => {
    let currentTodos = todos;
    currentTodos = currentTodos.map(elm => {
      if(elm.id !== newTodo.id)
        return elm
      else 
        return {
          id : newTodo.id,
          text : newTodo.text
        }
    })
    setTodos(currentTodos);
  }

  return(
    <>
      <Container maxWidth="md">
        <Header/>
        <Form
          addTodo={addTodo}
        />
        <TodoList 
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </Container>
    </>
  );
}