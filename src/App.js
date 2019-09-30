import React from 'react';
import SignUpComponent from './components/global/SignUpComponent';
import LoginComponent from './components/global/LoginComponent';
import Landing from './components/landing/LandingComponent';
import NavigationBar from './components/global/NavigationBarComponent';
import FooterComponent  from './components/global/FooterComponent';
import 'mdbreact/dist/css/mdb.css'
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <SignUpComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
