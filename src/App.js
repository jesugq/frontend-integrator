import React from 'react';
import NavigationBar from './components/global/NavigationBarComponent';
import FooterComponent  from './components/global/FooterComponent';
import 'mdbreact/dist/css/mdb.css'
import './App.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <FooterComponent />
    </div>
  );
}

export default App;
