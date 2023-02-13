import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import HomePage from './HomePage';
import NewColor from './NewColor';

function App() {

  const [colors, setColors] = useState([{name:"red", color: '#ff0000'}, {name:"green", color:"#00ff00"}, {name:"blue", color:"#0000ff"}])
  


  return (
    <div className="App">
      <Routes>
        <Route exact path='/colors' element = {<HomePage colors = {colors}/>}></Route>
        <Route exact path='/colors/new' element = {<NewColor colors = {colors} setColors = {setColors}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
