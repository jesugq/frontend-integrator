// Common imports.
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports.
import NavigationComponent from './components/global/NavigationComponent';
import SideMenuComponent from './components/global/SideMenuComponent';
import FooterComponent from './components/global/FooterComponent';
import NotFoundComponent from './components/global/NotFoundComponent';

import LoginComponent from './components/registry/LoginComponent';
import SignUpComponent from './components/registry/SignUpComponent';

import LandingComponent from './components/landing/LandingComponent';

// Project css.
import './App.css';

/**
 * App is responsible for the routing of this application, using the
 * BrowserRouter and Switch libraries provided by React Router DOM.
 * All of components used for navigation have both the Navigation and
 * Footer components attached to them.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="nav-wrapper">
        <NavigationComponent />
      </div>
      <Switch>
          <Route lazy exact path='/' component={LandingComponent} />
          <Route lazy path='/login' component={LoginComponent} />
          <Route lazy path='/signup' component={SignUpComponent} />
          <Route lazy path='/profile' component={SideMenuComponent} />
          <Route lazy component={NotFoundComponent} />
      </Switch>
      <div className="footer">
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;