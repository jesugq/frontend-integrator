// Common imports.
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports.
import NavigationComponent from './components/global/NavigationComponent';
import ProfileComponent from './components/profile/ProfileComponent';
import FooterComponent from './components/global/FooterComponent';
import NotFoundComponent from './components/global/NotFoundComponent';
import WhoComponent from './components/global/WhoComponent';
import TerminosComponent from './components/global/TerminosComponent';
import FrequentComponent from './components/global/FrequentComponent';
import ContactComponent from './components/global/ContactComponent';
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
    <div className="page-container">
      <BrowserRouter>
        <div className="nav-wrapper">
          <NavigationComponent />
        </div>
        <div className="content-wrap">
          <Switch>
              <Route lazy exact path='/' component={LandingComponent} />
              <Route lazy path='/login' component={LoginComponent} />
              <Route lazy path='/signup' component={SignUpComponent} />
              <Route lazy path='/profile' component={ProfileComponent} />
              <Route lazy path='/who' component={WhoComponent} />
              <Route lazy path='/terminos' component={TerminosComponent} />
              <Route lazy path='/frequent' component={FrequentComponent} />
              <Route lazy path='/contact' component={ContactComponent} />
              <Route lazy component={NotFoundComponent} />
          </Switch>
        </div>
        <div className="footer">
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;