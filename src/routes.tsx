import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanegesMap';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>

  );
}
export default Routes;