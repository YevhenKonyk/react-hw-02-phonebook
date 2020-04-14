import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ items }) => (
  <>
    {items.length > 0 && (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
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
};
export default ContactList;
