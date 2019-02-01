import {GET_TODOS,DELETE_TODO,ADD_TODO,EDIT_TODO,TOGGLE_CHANGE} from './Types'



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

export const editTodo=(Todo)=>{
    return{
        type:EDIT_TODO,
        payload:Todo
    }
}


export const toggleChange=(id)=>{
    return{
        type:TOGGLE_CHANGE,
        payload:id
    }
}


