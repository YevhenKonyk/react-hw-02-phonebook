/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.resetContactForm();
  };

  resetContactForm = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleInputChange}
          placeholder="Enter phone number"
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}
