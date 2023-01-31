import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_USER_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.ADD_USER_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };

    case types.ADD_USER_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true, data: [] };

    case types.GET_USER_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_USER_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };

    case types.GET_USER_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true, data: [] };

    case types.UPDATE_USER_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.UPDATE_USER_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };

    case types.UPDATE_USER_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true, data: [] };

    case types.DELETE_USER_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };

    default:
      return state;
  }
};
