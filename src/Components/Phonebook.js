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

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <ContactForm onAddContact={this.addContact} />
        <ContactList items={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
