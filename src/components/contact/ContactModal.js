import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {
  Modal,
  ModalBody,
  Media,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import color from '@material-ui/core/colors/grey';
import { white } from 'ansi-colors';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
    color:"blue"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  cssLabel: {
    color:'blue',//required color
    
  },
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      message: '',
      messageError: '',
      buttonText: 'Send Message',
      emailTextFieldError: false,
      nameTextFieldError: false,
      messageTextFieldError: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  formSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        buttonText: '...sending'
      });
      console.log('hello this an success message');
      let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      axios
        .post('https://mme-backend.herokuapp.com/api/v1', data)
        .then(res => {
          this.setState({ sent: true, buttonText: 'Message has been sent' });
        })
        .catch(() => {
          this.setState({ buttonText: 'Message has failed to send' });
          console.log('Message not sent');
        });

      // clear form
      this.setState({
        name: '',
        nameError: '',
        email: '',
        emailError: '',
        message: '',
        messageError: '',
        emailTextFieldError: false,
        nameTextFieldError: false,
        messageTextFieldError: false
      });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let isError = false;
    if (!this.state.name.length) {
      isError = true;
      this.setState({
        nameError: 'Cannot be empty',
        nameTextFieldError: true
      });
    } else {
      this.setState({
        nameError: '',
        nameTextFieldError: false
      });
    }
    if (!this.state.message.length) {
      isError = true;
      this.setState({
        messageError: 'Cannot be empty',
        messageTextFieldError: true
      });
    } else {
      this.setState({
        messageError: '',
        messageTextFieldError: false
      });
    }
    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      this.setState({
        emailError: 'This is not an email',
        emailTextFieldError: true
      });
    } else {
      this.setState({
        emailError: '',
        emailTextFieldError: false
      });
    }
    return isError;
  };
  render() {
    const { classes } = this.props;
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
            <form className={classes.container} noValidate autoComplete="off">
              <div className="Contact">
               
                <TextField
                  FormLabelClasses={{
                    label: classes.cssLabel,
                    
                  }}
                  error={this.state.nameTextFieldError}
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange}
                  margin="normal"
                  name="name"
                />
                <h3>{this.state.nameError}</h3>
                <TextField
                  error={this.state.emailTextFieldError}
                  id="standard-name"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                  margin="normal"
                />
                <h3>{this.state.emailError}</h3>
                <TextField
                  error={this.state.messageTextFieldError}
                  id="standard-multiline-flexible"
                  label="Message"
                  multiline
                  rowsMax="4"
                  value={this.state.message}
                  onChange={this.handleChange}
                  className={classes.textField}
                  margin="normal"
                  name="message"
                />
                <h3>{this.state.messageError}</h3>
                <div className="button-container">
                  <h4 onClick={this.formSubmit}>{this.state.buttonText}</h4>
                </div>
              </div>
            </form>
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

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
