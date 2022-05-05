import Todo from '../todo/todo'
import './todoCreate.css'
import {useState} from "react"

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')       
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random()*100) +1,
            title: getInputTodo
        }
        console.log(props)
        props.BuatTodo(newTodo)
        setInputTodo('')
    }
    const handleInputTodo = (e) => {
        setInputTodo(e.target.value)
        console.log(getInputTodo)
    }
    return (
        <form className='todo-form'>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit" onClick={handleSubmit}>add</button>
        </form>
    )
}

export default TodoCreate