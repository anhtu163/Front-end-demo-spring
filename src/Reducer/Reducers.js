import { combineReducers } from "redux";
import LoginReducer  from './LoginReducer';
import TodoListReducer from './TodoListReducer';

const Reducers = combineReducers({
    LoginReducer,
    TodoListReducer,
})

export default Reducers;