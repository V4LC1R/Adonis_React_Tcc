import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/welcome" component={() => <h1>Welcome to the Jungle</h1>} />
      <Route path="/login" component={()=><h1>entrando</h1>}/>
      <PrivateRoute exact path="/catalogo/view" component={()=><h1>ver pecas</h1>}/>
      <PrivateRoute exact path="/catalogo/edit" component={()=><h1>editat pecas</h1>}/>
      <PrivateRoute exact path="/catalogo/new" component={()=><h1>inserir pecas</h1>}/>
    </Switch>
  </BrowserRouter>
);

export default Routes