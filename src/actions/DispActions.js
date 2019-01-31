import {GET_TODOS,DELETE_TODO,ADD_TODO} from './Types'
import axios from 'axios';


export const getTodos=()=>{
    return{
        type:GET_TODOS
    }
}

export const addTodo=(Todo)=>{
    return{
        type:ADD_TODO,
        payload:Todo
    }
}

export const deleteTodo=(id)=>{
    return{
        type:DELETE_TODO,
        payload:id
    }
}

// export const getTodos=()=>async dispatch =>{
// const res= await axios.get('https://jsonplaceholder.typicode.com/users');
//     dispatch({
//         type: GET_TODOS,
//         payload: res.data
//     })
// }
