import { useEffect, useReducer } from "react";
import {todoReducer} from "../09-reducer/todoReducer"

// const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const useTodo = () => {

   
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //TODO: Tarea 1
    // Crear handleDeleteTodo para eliminar un todo
    // Crear handleToggleTodo para cambiar el estado 
    // de la propiedad done al hacer un doble click 
    
    const handleNewTodo = (todo)=>{
        dispatch({type: 'ADD_TODO', payload: todo})
    }

    const handleDeleteTodo = (id) => {
        dispatch({type: "DELETE_TODO", payload: id})
    }

    const handleToggleTodo = (id)=> {
        dispatch({type: 'TOGGLE_TODO', payload: id})
    }

    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todoCount: todos.length,
        pendingTodoCount: todos.filter(todo => todo.done === false).length
    }
}
