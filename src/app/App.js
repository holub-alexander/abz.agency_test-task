import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import IndexPage from '../pages/Index';
import Layout from '../components/Layout/Layout';
import routes from './../routes/index';

const App = () => {
  const routesLink = (
    <Switch>
      {routes
        .slice(1)
        .reverse()
        .map(route => (
          <Route path={route.to} component={route.component} key={uuidv4()} />
        ))}
      <Route path={'/'} component={IndexPage} />
      <Redirect to={'/'} />
    </Switch>
  );

  return <Layout>{routesLink}</Layout>;
};

export default App;
