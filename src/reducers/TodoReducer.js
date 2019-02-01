import{GET_TODOS,DELETE_TODO,ADD_TODO,EDIT_TODO, TOGGLE_CHANGE} from '../actions/Types'

const initialState={
    Todos: [
        {
            id:1,
            item:'learn react Native',
            isChecked:false
        },
        {
            id:2,
            item:'learn Redux',
            isChecked:false
        },
        {
            id:3,
            item:'learn firebase',
            isChecked:false
        },
        {
            id:4,
            item:'learn saga',
            isChecked:false
        },
        {
            id:5,
            item:'learn thunk',
            isChecked:false
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
       case EDIT_TODO:
       return{
           ...state,
           Todos:[...state.Todos.filter(v=>v.id!=action.payload.id),action.payload]
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