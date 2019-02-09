import {GET_TODOS,GET_TODO,DELETE_TODO,ADD_TODO,TOGGLE_CHANGE,UPDATE_TODO} from './Types'
import axios from 'axios'


export const getTodos=()=> async dispatch =>{
const res=await axios.get('http://localhost:3000/Todos')
    dispatch({
        type:GET_TODOS,
        payload: res.data
    })
}

export const getTodo=(id)=> async dispatch =>{
    const res=await axios.get(`http://localhost:3000/Todos/${id}`)
        dispatch({
            type:GET_TODO,
            payload: res.data
        })
    }

export const addTodo=(Todo)=> async dispatch =>{
    const res=await axios.post('http://localhost:3000/Todos', Todo)
    dispatch({
        type:ADD_TODO,
        payload:res.data
    })
}

export const deleteTodo=(id)=>async dispatch => {
    await axios.delete(`http://localhost:3000/Todos/${id}`)
    dispatch ({
        type:DELETE_TODO,
        payload:id
    })
}

export const updateTodo=(Todo)=> async dispatch=>{
    const res=await axios.put(`http://localhost:3000/Todos/${Todo.id}`, Todo)
    dispatch({
        type:UPDATE_TODO,
        payload:res.data
    })
}


export const toggleChange=(id)=>{
    return{
        type:TOGGLE_CHANGE,
        payload:id
    }
}


