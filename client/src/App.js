import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import UserNewContainer from "./views/UserNewContainer";
import ListUsersContainer from "./views/ListUsersContainer";

const App = () => (
  <Provider store={store}>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <UserNewContainer />
        </div>
        <div className="col-md-8">
          <ListUsersContainer />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
