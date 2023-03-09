import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/navBar/navBar.jsx";
import Home from "../pages/home.jsx";
// import Rooms from "../pages/rooms.jsx";
import Contacts from "../pages/contacts.jsx";
import RoomSelection from "../pages/roomSelection.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/contacts/" component={Contacts} />
        <Route path="/rooms/" component={RoomSelection} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
