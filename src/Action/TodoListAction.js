import * as constant from '../Constant/constant';
import Axios from 'axios';

export const TODO_URL = "http://localhost:8080/api/todolist";

//GET ALL
function OnGetAll(token){
    console.log(token);
    const res = Axios.get(TODO_URL,{
        headers:{Authorization: `Bearer ${token}`}
      }).catch(err => {
        return err;
    })
    return res;
}

export const getAllRequest = (token) => {

    return dispatch => {
        return OnGetAll(token).then(res => {
            dispatch(getAll(res));
        })
    }
}

export const getAll = (res) => ({
    type: constant.GET_ALL,
    data: {
        res,
    }
})

//DELETE ITEM

function OnDeleteItem(token, id){
    const res = Axios.post(`http://localhost:8080/api/todolist/${id}`,{
        headers:{Authorization: `Bearer ${token}`}
      }).catch(err => {
        return err;
    })
    return res;
}

export const deleteItemRequest = (token, id) => {

    return dispatch => {
        return OnDeleteItem(token, id).then(res => {
            dispatch(deleteItem(res));
        })
    }
}

export const deleteItem = (res) => ({
    type: constant.DELETE_ITEM,
    data: {
        res,
    }
})

//TODO: UPDATE ITEM

function OnUpdateItem(token, id){
    const res = Axios.post(TODO_URL,{
        headers:{Authorization: `Bearer ${token}`}
      },{
          id,
      }).catch(err => {
        return err;
    })
    return res;
}

export const updateItemRequest = (token, id) => {

    return dispatch => {
        return OnUpdateItem(token, id).then(res => {
            dispatch(updateItem(res));
        })
    }
}

export const updateItem = (res) => ({
    type: constant.UPDATE_ITEM,
    data: {
        res,
    }
})

// TODO: Add Item

function OnAddItem(token, data){
    console.log(data);
    const res = Axios.post(TODO_URL,{
        headers:{Authorization: `Bearer ${token}`}
      },data).catch(err => {
        return err;
    })
    return res;
}

export const addItemRequest = (token, data) => {

    return dispatch => {
        return OnAddItem(token, data).then(res => {
            dispatch(addItem(res));
        })
    }
}

export const addItem = (res) => ({
    type: constant.ADD_ITEM,
    data: {
        res,
    }
})