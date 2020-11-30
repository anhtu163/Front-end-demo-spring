import Axios from 'axios';
import * as constant from '../Constant/constant';

const AUTH_URL = 'http://localhost:8080/api/auth/';

function OnClickLogin(username, password){
    console.log(username+ " " + password)
    const res = Axios.post(AUTH_URL + 'signin',{
        username,
        password
    }).catch(err => {
        console.log(err);
        return err;
    })
    console.log(res);
    return res;
}

export const LoginRequest = (username, password) => {

    return dispatch => {
        return OnClickLogin(username, password).then(res => {
            dispatch(Login(username, password, res));
        })
    }
}

export const Login = (username, password, res) => ({
    type: constant.LOGIN,
    data: {
        username,
        password,
        res,
    }
})

export const Logout = () => ({
    type: constant.LOGOUT,
})