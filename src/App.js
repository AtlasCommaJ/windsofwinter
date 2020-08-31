import React, {useState} from 'react';
import './App.css';
import cover from './cover.png';
import Upgrades from './Upgrades.js';

function App() {
  const [pages, setPages] = useState(0);

  function onClick() {
    setPages(pages+1);
  }

  function spendPages(cost) {
    setPages(pages-cost)
  }




  return (
    <div className="App">
       <p> A Dream of Winds of Winter </p>
       <img src={cover} className="Cover" onClick={onClick}/>
       <p> Click to help George write! </p>
       {pages} pages written so far.
       <Upgrades spend={spendPages}/>
    </div>
  );
}

export default App;
