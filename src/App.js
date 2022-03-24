import React from 'react';
import './App.css';
import Nav from './navBar.js';
import Current from './current.js';
import SevenDay from './sevenDay.js';
import background from "./img/snowy_bg.svg";

function App() {
  return (
    <div>
      <div className="background" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat'
      }}></div>
      <Nav />
      <Current />
      <SevenDay />
    </div>
  );
}

export default App;
