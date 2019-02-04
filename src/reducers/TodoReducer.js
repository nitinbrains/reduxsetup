import{GET_TODOS,GET_TODO,UPDATE_TODO,DELETE_TODO,ADD_TODO,EDIT_TODO, TOGGLE_CHANGE} from '../actions/Types'

const initialState={
    Todos: [],
    Todo:{}
    
};
export default function(state=initialState, action) {
   switch(action.type){
       case GET_TODOS:
       return {
           ...state,
           Todos:action.payload
           
       };
       case GET_TODO:
       return {
           ...state,
           Todo:action.payload
           
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
       case UPDATE_TODO:
       return{
           ...state,
        //    Todos:[...state.Todos.filter(v=>v.id!=action.payload.id),action.payload]
              Todos: state.Todos.map(v=>v.id==action.payload.id ? (v=action.payload) : v)
       }
       case TOGGLE_CHANGE:
       return{

           ...state,
           Todos:state.Todos.map(
               c=>c.id==action.payload ? Object.assign(c, { isChecked: !c.isChecked}) : c)
           
       }
       default:
       return state;
   }
}