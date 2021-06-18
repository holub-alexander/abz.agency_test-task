import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../components/Layout/Layout';
import Preloader from './../components/UI/Preloader/Preloader';
import routes from './../routes/index';

const IndexContainer = React.lazy(() => import('../pages/Index'));

const App = () => {
  const routesLink = (
    <Switch>
      {routes
        .slice(1)
        .reverse()
        .map(route => (
          <Route path={route.to} component={route.component} key={uuidv4()} />
        ))}
      <Route path={'/'} component={IndexContainer} />
      <Redirect to={'/'} />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<Preloader />}>{routesLink}</Suspense>
    </Layout>
  );
};

export default App;
