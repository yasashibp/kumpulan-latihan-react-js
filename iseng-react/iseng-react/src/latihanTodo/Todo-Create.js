import { useState } from "react";
import React from "react";

const TodoCreate = () => {
    const[getInput, setInput] = useState('')
    const submit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random()*100)+1,
            title: getInput
        }
        console.log(props)
        props.CrateTodo(newTodo)
        setInput("")
    }   
}                                      