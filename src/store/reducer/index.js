import { combineReducers } from "redux";
import authReducer from "./authReducer";
import supplierReducer from "./supplierReducer";

export default combineReducers({
  auth: authReducer,
  supplier: supplierReducer,
});
