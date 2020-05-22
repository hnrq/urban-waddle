import { combineReducers } from "redux";
import todoReducer from "./todoReducer/todoReducer";
import authReducer from "./authReducer/authReducer";

export default combineReducers({ todoReducer, authReducer });
