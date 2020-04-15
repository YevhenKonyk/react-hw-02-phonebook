import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const filterContacts = (contacts, filter) =>
  contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

const checkContactInList = (contact, contacts) =>
  contacts.find(element =>
    element.name.toLowerCase().includes(contact.name.toLowerCase()),
  );

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = item => {
    const isContactInList = checkContactInList(item, this.state.contacts);

    if (!isContactInList) {
      const newContact = {
        id: shortid.generate(),
        ...item,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      // eslint-disable-next-line no-alert
      alert(`The contact ${item.name} is already in list`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  handleFilterChange = e => this.setState({ filter: e.target.value });

  clearFilter = () => this.setState({ filter: '' });

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <ContactForm onAddContact={this.addContact} />
        {contacts.length > 2 && (
          <Filter
            value={filter}
            onChangeFilter={this.handleFilterChange}
            onClearFilter={this.clearFilter}
          />
        )}
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
