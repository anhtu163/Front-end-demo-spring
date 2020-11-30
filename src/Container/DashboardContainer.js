import { connect } from "react-redux"
import Dashboard from "../Component/Dashboard";
import * as actions from "../Action/LoginAction";
import * as todoAction from "../Action/TodoListAction";

const mapStateToProps = (state) =>{
    return {
        token: state.LoginReducer.token,
        isLogin: state.LoginReducer.isLogin,
        todoList: state.TodoListReducer.todoList,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        logout: () => {dispatch(actions.Logout());},
        getAll: (token) => {dispatch(todoAction.getAllRequest(token));},
        deleteItem: (token, id) => {dispatch(todoAction.deleteItemRequest(token, id))},
        updateItem: (token, id) => {dispatch(todoAction.updateItemRequest(token,id))},
        addItem: (token, data) => {dispatch(todoAction.addItemRequest(token,data))}
    }

}

const DashboardContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);

export default  DashboardContainer;