import React from 'react';
import Landing from './components/landing/LandingComponent';
import NavigationBar from './components/global/NavigationBarComponent';
import FooterComponent  from './components/global/FooterComponent';
import logo from './logo.svg';
import 'mdbreact/dist/css/mdb.css'
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <Landing />
      <FooterComponent />
    </div>
  );
}

export default App;
