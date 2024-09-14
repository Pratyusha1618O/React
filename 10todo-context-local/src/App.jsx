import { useEffect, useState } from 'react'
import {TodoProvider} from './Contexts'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  //_TODO MSG___
  const addTodo = (todo)=>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  //_Update TODO___
  // TODO update korar jonno id chai ar todo msg ta chai
  // "todos" ekta array. so etay loop lagie find korte hobe kon id er todo k update korte hobe
  // map lagale prottekta todo peye jabo, prottekta todo i object, protita object er id ache
  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // prev.map((eachVal)=>{
    //   if(eachVal.id === id){
    //     todo
    //   }
    // })
  }

  // ___DELETE TODO___
  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    // console.log(id);  
    setTodos((prev) => 
      prev.map((prevTodo) =>
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    ))
  }

  //_LOCAL STORAGE_________
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  


  return (
    // TodoProvider er moddhe ja ja chilo sob gulo k nilam. Hover on TodoProvider to know that ki ki nilam
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div keys={todo.id}
              className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App