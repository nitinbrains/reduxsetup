import{GET_TODOS,DELETE_TODO,ADD_TODO} from '../actions/Types'

const initialState={
    Todos: [
        {
            id:1,
            item:'learn redux'
        },
        {
            id:2,
            item:'learn scss'
        },
        {
            id:3,
            item:'learn firebase'
        },
        {
            id:4,
            item:'learn saga'
        },
        {
            id:5,
            item:'learn thunk'
        }
    ]
    
};

export default function(state=initialState, action) {
   switch(action.type){
       case GET_TODOS:
       return {
           ...state
           
       };
       case ADD_TODO:
       return{
           ...state,
           Todos:[...state.Todos, action.payload]
       }
       case DELETE_TODO:
       return{
           ...state,
           Todos:state.Todos.filter(v=>v.id!==action.payload)
       }
       default:
       return state;
   }
}