import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ items, onDeleteContact }) => (
  <>
    {items.length > 0 && (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
            <button
              type="button"
              onClick={() => {
                onDeleteContact(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
