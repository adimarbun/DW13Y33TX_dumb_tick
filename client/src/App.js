import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventsDetail from "./pages/eventDetail";
import Profil from "./pages/profil";
import AddEvent from "./pages/addEvent";
import CategoryDetail from "./pages/categoriesDetail";
import Payment from "./pages/payment";
import PaymentPending from "./pages/paymentPending";
import MyTicket from "./pages/myTicket";

function App() {
  return (
    <div style={{ backgroundColor: "	#FFE4E1" }}>
      <Router>
        <Switch>
          <Route path="/event/:id">
            <EventsDetail />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <Route path="/category/:id/events">
            <CategoryDetail />
          </Route>
          <Route path="/order/:idOrder">
            <Payment />
          </Route>
          <Route path="/paymentPending">
            <PaymentPending />
          </Route>
          <Route path="/myTicket">
            <MyTicket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
