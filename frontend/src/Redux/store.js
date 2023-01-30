import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as UserReducer } from "../Redux/User/reducer";

const rootReducer = combineReducers({ UserReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
