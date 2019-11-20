import React from 'react';

import NavigationComponent from './components/global/NavigationComponent';
import SideMenuComponent from './components/global/SideMenuComponent';

import 'mdbreact/dist/css/mdb.css'
import './App.css';

function App() {
  return (

    <div>
      <NavigationComponent />
      <SideMenuComponent />
    </div>
   
  );
}

export default App;
