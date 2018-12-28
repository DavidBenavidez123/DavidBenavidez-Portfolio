import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <p>
              You can contact me here
            </p>
            <h3>benavidez1david@gmail.com</h3>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Contact;
