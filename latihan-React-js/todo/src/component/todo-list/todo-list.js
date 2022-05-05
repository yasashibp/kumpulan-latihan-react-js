import './todo-list.css'
import React from 'react'

const TodoList = (props) => {
    return(
        <ul>
            {
                props.dataTodos.map(e => {
                    return <li key={e.id}>{e.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList