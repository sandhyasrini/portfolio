import React from 'react';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import {
  Body
} from './components/Body/index';

const app = () => (
  <HashRouter>
    <Route exact path="/" component={Body} />
  </HashRouter>
);

export default app;