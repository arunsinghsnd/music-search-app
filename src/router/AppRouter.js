import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import RedireactPage from "../components/Home";
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/redireact" component={RedireactPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
