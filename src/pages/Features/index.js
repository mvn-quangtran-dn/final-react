import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

const Friends = lazy(() => import('./Friends'));
const Home = lazy(() => import('./Home'));

const Features = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default Features;
