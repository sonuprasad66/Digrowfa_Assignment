import * as types from "./actionTypes";
import axios from "axios";

export const addUser = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USER_DATA_REQUEST });
  return axios
    .post(`http://localhost:8080/adduser`, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.ADD_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_USER_DATA_FAILURE, payload: err });
    });
};

export const getUser = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_DATA_REQUEST });
  return axios
    .get(`http://localhost:8080/getuser`)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.GET_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DATA_FAILURE, payload: err });
    });
};
