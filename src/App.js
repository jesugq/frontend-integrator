import React from 'react';

import NavigationComponent from './components/global/NavigationComponent';

import 'mdbreact/dist/css/mdb.css'
import './App.css';
import LoginComponent from './components/registry/LoginComponent';

function App() {
  return (
    <NavigationComponent>
      <LoginComponent />
    </NavigationComponent>
  );
}

export default App;
