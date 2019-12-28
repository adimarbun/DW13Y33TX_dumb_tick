import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsDetail from "./pages/eventDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Router path="/eventDetail">
          <EventsDetail />
        </Router>
        <Router path="/">
          <Home />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
