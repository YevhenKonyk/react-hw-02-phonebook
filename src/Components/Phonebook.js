import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

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
    const { contacts } = this.state;

    return (
      <>
        <ContactForm onAddContact={this.addContact} />
        <ContactList items={contacts} />
      </>
    );
  }
}
