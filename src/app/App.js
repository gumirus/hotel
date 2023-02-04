import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/navBar/navBar.jsx";
import Home from "../pages/home.jsx";
import Rooms from "../pages/rooms.jsx";
import Services from "../components/services/services.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/servises/" component={Services} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
