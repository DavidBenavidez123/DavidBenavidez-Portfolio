import React, { Component } from 'react';
import logo from '../logo.svg';
import Work from './work/WorkModal';
import Contact from './contact/ContactModal';
import About from './about/AboutModal';
import { CSSTransition } from 'react-transition-group';

import '../App.css';

class App extends Component {
  state = { appearHome: true };

  render() {
    return (
      <div className="Home">
        <CSSTransition
          in={this.state.appearHome}
          appear={true}
          timeout={200}
          classNames="fade"
        >
          <div className="Homes">
            <CSSTransition
              in={this.state.appearHome}
              appear={true}
              timeout={400}
              classNames="fade"
            >
              <div className="Header">
                <h1> Full Stack Developer </h1>
              </div>
            </CSSTransition>
            <div className="Line" />
            <div className="Buttons">
              <Work />
              <About />
              <Contact />
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
