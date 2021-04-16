import React, { Fragment } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import SearchPage from "./views/search";
const store = configureStore();

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div className="app-header">
          <SearchPage />
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
