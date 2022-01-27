import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainComponent from "./MainComponent";
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    })
  }, []);

  return (
    <div>
      <p>Rucham psa jak sra</p>
    </div>
    // <Router>
    //   <header>
    //     <div>This is a multicontainer application</div>
    //     <Link to="/">Home</Link>
    //     <Link to="/other">Other page</Link>
    //   </header>
    //   <div>
    //     <Route exact path="/" component={MainComponent}></Route>
    //   </div>
    // </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>The current time is {currentTime}</p>
    //   </header>
    // </div>
  );
}

export default App;
