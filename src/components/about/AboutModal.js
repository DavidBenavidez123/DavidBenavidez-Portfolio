import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="About" onClick={this.toggle}>
          About
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <h1>About</h1>
            <p>
              Hello, I'm David. Although, my love for tech began in my youth, my
              passion for web development began with the first bootcamp I
              completed at my college. After a lot of thought I decided to join
              a fulltime Full Stack Web Development course at another bootcamp.
              This is where my passion grew immensely as I got to see and work
              with both the front-end and back-end sides of web applications. I
              developed projects and even some that I am proud to say I created
              on my own.
            </p>
            <p>Here are some technolgies that I learned during my journey</p>
            <div className="front-back-flex">
              <div className="Front-end">
                <h1>Front-end</h1>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>Javascript</h3>
                <h3>React</h3>
                <h3>Redux </h3>
              </div>

              <div className="Back-end">
                <h1>Back-end</h1>
                <h3>Node.js</h3>
                <h3>Express.js</h3>
                <h3>Knex.js</h3>
                <h3>Postgress</h3>
                <h3>Fuse.js</h3>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default About;
