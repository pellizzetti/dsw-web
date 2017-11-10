import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';

render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
    </Switch>
   </BrowserRouter>
), document.getElementById('app'));
