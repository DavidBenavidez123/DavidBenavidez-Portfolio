import React, { Component } from 'react';
import {
  Modal,
  ModalBody,
  Media,
  Form,
  FormGroup,
  Label,
  Input,
  
} from 'reactstrap';

class Contact extends React.Component {
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
        <div className="contact" onClick={this.toggle}>
          Contact
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>
            <h1>Contact</h1>
            <Form>
              <FormGroup>
                <Label for="FirstName">Full name</Label>
                <Input
                  type="text"
                  name="FirstName"
                  onChange={this.handlechange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" onChange={this.handlechange} />
              </FormGroup>
              <FormGroup>
                <Label for="Subject">Subject</Label>
                <Input
                  type="text"
                  name="Subject"
                  onChange={this.handlechange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input
                  type="textarea"
                  name="text"
                  onChange={this.handlechange}
                />
              </FormGroup>
            </Form>
            <div className="linksFlex">
              <a href="https://github.com/DavidBenavidez123" target="_blank">
                <Media
                  object
                  src={
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                  }
                  alt="Github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/david-benavidez/"
                target="_blank"
              >
                <Media
                  object
                  src={
                    'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png'
                  }
                  alt="Linkedin"
                />
              </a>
              <a href="https://angel.co/david-benavidez" target="_blank">
                <Media
                  object
                  src={'https://angel.co/images/shared/peace_large.jpg'}
                  alt="Generic placeholder image"
                />
              </a>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Contact;
