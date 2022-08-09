import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import authReducer from "./reducer/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import devToolsEnhancer from "remote-redux-devtools";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

let composeEnhancer = compose;

// if (__DEV__) {
//   composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [thunk];
// const configureStore = () => {
//   return createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(...middlewares))
//   );
// };
// const configureStore = () => {
//   return createStore(rootReducer, devToolsEnhancer());
// };

// Update For Web
const middlewares = [thunk];
const configureStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);
export default configureStore;
