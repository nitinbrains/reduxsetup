import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer';

export default combineReducers({
    Todo: TodoReducer
});





















// const rootReducer = combineReducers({
//     friends: FriendListReducer
//   });
//   export default rootReducer;