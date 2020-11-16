import React from "react";
import UserNewContainer from "./pages/UserNewContainer";
import ListUsersContainer from "./pages/ListUsersContainer";
import { ListUsersProvider } from "./context/ListUsersContext";
import SearchUser from "./pages/SearchUser";

const App = () => (
  <ListUsersProvider>
    <div className="row mt-5">
      <div className="col-md-4">
        <UserNewContainer />
        <SearchUser />
      </div>
      <div className="col-md-8">
        <ListUsersContainer />
      </div>
    </div>
  </ListUsersProvider>
);

export default App;
