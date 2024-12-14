import { useState } from 'react'
import './App.css'

let counter = 4;
function App() {
  const [todos, setTodo] = useState([
    {
      id:1, 
      title: 'Buy groceries',
      description : 'buy 4 types of vegetables'
    },
    {
      id:2, 
      title: 'Complete assignments',
      description : 'finish all assignments'
    },
    {
      id:3, 
      title: 'Create presentation',
      description : 'make a presentation about the topic'
    }
  ])
  
  function addTodos() {
    setTodo([ 
      {
        id : counter++,
        title : Math.random(),
        description : Math.random()
      }, ...todos])
  }

  return (
    <>
      <h1>Todo app</h1>
      <button onClick={addTodos}>add a random todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
)}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  )
}

export default App
