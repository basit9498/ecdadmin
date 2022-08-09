import React from "react";
import Routes from "./Router";
import { Provider } from "react-redux";
import configureStore from "../src/store/configureStore";
const store = configureStore;
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
