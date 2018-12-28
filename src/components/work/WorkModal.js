import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media
} from 'reactstrap';

class Work extends React.Component {
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
        <div className="work" onClick={this.toggle}>
          Projects
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <h1>Work</h1>
            <h3>Qrafts</h3>
            <p>
              Interactive platform to post DIY projects and rate and provide
              feedback to other users’ DIY projects.
            </p>
            <div className="projectImage">
              <a href="https://ratemydiy-dev.netlify.com/" target="_blank">
                <Media
                  object
                  src={
                    'https://i.gyazo.com/2e65468a6c235c541185781a6a8739cb.jpg'
                  }
                  alt="Generic placeholder image"
                />
              </a>
              <ul>
                <h3>Utilized</h3>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Knex.js</li>
                <li>Express.js</li>
                <li>Postgres</li>
                <li>Fuse.js</li>
                
              </ul>
            </div>

            <h3>Lambda Notes</h3>
            <p>
              Basic note-taking application that allows anyone to view, upload,
              delete, edit a note
            </p>

            <div className="projectImage">
              <a href="https://front-end-.herokuapp.com/" target="_blank">
                <Media
                  object
                  src={
                    'https://i.gyazo.com/b6342e5df912992da7c71199597755b3.png'
                  }
                  alt="Generic placeholder image"
                />
              </a>

              <ul>
                <h3>Utilized</h3>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Knex.js</li>
                <li>Express.js</li>
                <li>Postgres</li>
              </ul>
            </div>
            <h3>User Interface Course Project</h3>
            <p>
              A mock-up website for a fake architectural firm named Smith and
              Jones Architects.
            </p>
            <div className="projectImage">
              <a
                href="https://loving-mirzakhani-f1b02c.netlify.com/"
                target="_blank"
              >
                <Media
                  object
                  src={
                    'https://i.gyazo.com/7c1fb70a88247e1b0d882e906a33c1ec.png'
                  }
                  alt="Generic placeholder image"
                />
              </a>
              <ul>
                <h3>Utilized</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Greensock</li>
                <li>LESS</li>
              </ul>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Work;
