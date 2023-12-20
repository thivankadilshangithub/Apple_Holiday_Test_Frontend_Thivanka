import './App.css';
import React from 'react';
import MyRouter from './router';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      
      <MyRouter/>
    </div>
  );
}

export default App;
