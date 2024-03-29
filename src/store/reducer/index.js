import { combineReducers } from "redux";
import authReducer from "./authReducer";
import supplierReducer from "./supplierReducer";
import supplierProdcutReducer from "./supplierProdcutReducer";
import orderReducer from "./orderReducer";
import supplierLoaderReducer from "./supplierLoaderReducer";

export default combineReducers({
  auth: authReducer,
  supplier: supplierReducer,
  supplierProduct: supplierProdcutReducer,
  order: orderReducer,
  loader: supplierLoaderReducer,
});
