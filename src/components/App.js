import React, { Component } from 'react';
import logo from '../logo.svg';
import Work from './work/WorkModal';
import Contact from './contact/ContactModal';
import About from './about/AboutModal';

import '../App.css';

class App extends Component {
  
  render() {
    return (
      <div className="Home">
        <div className="Header">
          <h1> Full Stack Developer </h1>
        </div>
        <div className="Line" />
        <div className="Buttons">
          <Work />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
