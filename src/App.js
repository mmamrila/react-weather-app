import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './navBar.js';
import Current from './current.js';
import SevenDay from './sevenDay.js';
import background from "./img/snowy_bg.svg";

function App() {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=e92750a500383531609c69ba2f7d3e62`)
    .then(res => res.json())
    .then(data => { })

  return (
    <div>
      <div className="background" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat'
      }}>
        <Nav />
        <Current />
        <SevenDay />
      </div>
    </div>
  );
}

export default App;
