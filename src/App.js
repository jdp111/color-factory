import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import HomePage from './HomePage';

function App() {

  const [colors, setColors] = useState([{name:"red", color: 'red'}, {name:"green", color:"green"}, {name:"blue", color:"blue"}])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/colors' element = {<HomePage colors = {colors}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
