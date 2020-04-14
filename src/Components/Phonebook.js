import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContact = item => {
    const newContact = {
      id: shortid.generate(),
      ...item,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return <ContactForm onAddContact={this.addContact} />;
  }
}
