import React from "react";
import {  Route, Switch } from "react-router-dom";

import Brand from './painels/cadastro/index'

const RoutesDash = () => (

    <Switch>
      <Route exact path="/app/marcas" component={Brand} />
      <Route path="/app" component={() => <h1>oiee</h1>} />
    </Switch>

);

export default RoutesDash;