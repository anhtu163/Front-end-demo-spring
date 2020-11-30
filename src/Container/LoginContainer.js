import { connect } from "react-redux"
import Login from "../Component/Login"
import * as actions from '../Action/LoginAction';

const mapStateToProps = (state) =>{
    return{
        username: state.LoginReducer.username,
        password: state.LoginReducer.password,
        err: state.LoginReducer.err,
        token: state.LoginReducer.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(actions.LoginRequest(username, password));
        }
    } 
}

const LoginContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default  LoginContainer;