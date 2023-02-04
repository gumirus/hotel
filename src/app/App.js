import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Welcome from "./layouts/welcome";
import Rooms from "./layouts/rooms";
import Service from "./layouts/service";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/welcome/" component={Service} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/" exact component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
