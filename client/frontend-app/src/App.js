import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}</p>
      </header>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Fragment>
//         <header className="header">
//           <div>This is a multicontainer application</div>
//           <Link to="/">Home</Link>
//           <Link to="/otherpage">Other page</Link>
//         </header>
//         <div className="main">
//           <Route exact path="/" component={MainComponent} />
//           <Route path="/otherpage" component={OtherPage} />
//         </div>
//       </Fragment>
//     </Router>
//   );
// }

export default App;
