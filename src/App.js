import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarComponent from './components/global/NavBarComponent';
import SideMenuComponent from './components/global/SideMenuComponent';
/* import 'mdbreact/dist/css/mdb.css';
import './App.css'; */
import LoginComponent from './components/registry/LoginComponent';
import SignUpComponent from './components/registry/SignUpComponent';
import LandingComponent from './components/landing/LandingComponent';
import FooterComponent from './components/global/FooterComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <Switch>
          <Route exact path= '/' component={LandingComponent} /> 
          <Route path='/login' component={LoginComponent} />
          <Route path='/signup' component={SignUpComponent} />
          <Route path='/profile' component={SideMenuComponent} />
        </Switch>
        <FooterComponent />
      </div>
    </BrowserRouter>   
  );
}

export default App;
