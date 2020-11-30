import * as constant from "../Constant/constant";

const initialState = {
  username: '',
  password: '',
  token: '',
  err: '',
  isLogin: false,
};

const LoginReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case constant.LOGIN:
      const st = { ...state };
      st.username = actions.data.usename;
      st.password = actions.data.password;
      try {
        st.token = actions.data.res.data.accessToken;
        st.isLogin = !st.isLogin;
      } catch (error) {
        st.err = 'err';
      }
      return st;
    case constant.LOGOUT:
        return initialState;
    default:
      return state;
  }
};

export default LoginReducer;
