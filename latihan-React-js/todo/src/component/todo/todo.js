import './todo.css'
import TodoList from "../todo-list/todo-list"
import React from 'react'
import  {useState}  from 'react'
import TodoCreate from '../todo-create/todoCreate'


const Todo = () => {
    const [getTodos, setTodos] = useState([
        {id : 1, title: 'Eat'},
        {id : 2, title: 'Sleep'},
        {id : 3, title: 'Code'},
    ])

    const eBuatTodo = (e) => {
        setTodos(getTodos.concat(e))
        console.log(getTodos)
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate BuatTodo={eBuatTodo}/>
            <TodoList dataTodos={getTodos} />
        </div>
    )
}

export default Todo