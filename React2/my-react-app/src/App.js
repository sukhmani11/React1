import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      
      <Greet></Greet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
