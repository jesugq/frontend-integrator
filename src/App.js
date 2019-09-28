import React from 'react';
import Landing from './components/landing/LandingComponent';
import NavigationBar from './components/global/NavigationBarComponent';
import FooterComponent  from './components/global/FooterComponent';
import 'mdbreact/dist/css/mdb.css'
import './App.css';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <NavigationBar />
      <Landing />
      <FooterComponent />
    </div>
  );
}

export default App;
