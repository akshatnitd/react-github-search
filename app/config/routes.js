import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

import Search from '../components/Search';
import ResultsContainer from '../containers/ResultsContainer';
import Repo from '../components/Repo';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/search' component={Search} />
      <Route path='results' component={ResultsContainer} />
      <Route path='results/:owner/:repoName' component={Repo} />
      <Route path='*' component={Home} />
    </Route>
  </Router>
);

export default routes;
