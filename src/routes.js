import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Parse } from 'containers/Parse';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="parse" component={Parse} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
