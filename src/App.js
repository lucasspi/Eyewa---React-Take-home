import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import AppStack from "./views";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div className="app-header">
          <AppStack />
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
