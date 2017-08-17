import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class Build extends React.Component {
//  render() {
//      const test = "Hello, World!"
//    return (
//      <div className="app">
//        <p>{test}</p>
//      </div>
//    );
//  }
//}


const element = (
    <div>
  <div class="splash"> <img id="logo" src="images/game.jpg" />
        <h1 id="logoh1">Welcome to All-Time Gaming</h1> </div>
    <nav class="sitenavigation">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="creategame.html">Create A Game</a></li>
        </ul>
    </nav>
    <br />
    <br />
    <br />
    <br />
    </div>
);

// ========================================

ReactDOM.render(
  element,
  document.getElementById('root')
);