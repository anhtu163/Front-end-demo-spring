import * as constant from "../Constant/constant";

const initialState = {
  todoList: [],
};

const TodoListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case constant.GET_ALL:
      const st = { ...state };
      console.log(actions.data.res.data);
      try {
        st.todoList = actions.data.res.data;
      } catch (error) {
        console.log(error);
      }
      return st;
    case constant.ADD_ITEM:
      const st1 = { ...state };
      return st1;
    default:
      return state;
  }
};

export default TodoListReducer;
