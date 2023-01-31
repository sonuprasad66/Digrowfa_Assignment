import * as types from "./actionTypes";
import axios from "axios";

export const addUser = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USER_DATA_REQUEST });
  return axios
    .post(`https://digrowfa.onrender.com/adduser`, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.ADD_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_USER_DATA_FAILURE, payload: err });
    });
};

export const getUser = () => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });
  return axios
    .get(`https://digrowfa.onrender.com/getuser`)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DATA_FAILURE, payload: err });
    });
};

export const updateUser = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_USER_DATA_REQUEST });
  return axios
    .patch(`https://digrowfa.onrender.com/updateuser`, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({
        type: types.UPDATE_USER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_USER_DATA_FAILURE, payload: err });
    });
};

export const deleteUser = (id) => (dispatch) => {
  return axios
    .delete(`https://digrowfa.onrender.com/deleteuser/${id}`)
    .then((res) => {
      console.log("userDelete", res.data);
      return dispatch({
        type: types.DELETE_USER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchUser = (search) => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });
  return axios
    .get(`https://digrowfa.onrender.com/getuser?search=${search}`)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DATA_FAILURE, payload: err });
    });
};

export const filterByCountry = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });
  return axios
    .get(`https://digrowfa.onrender.com/getuser?country=${payload}`)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DATA_FAILURE, payload: err });
    });
};

export const sortByDob = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });
  return axios
    .get(`https://digrowfa.onrender.com/getuser?sort=${payload}`)
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DATA_FAILURE, payload: err });
    });
};
