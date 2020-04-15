import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => (
  <>
    {items.length > 0 && (
      <div className={styles.container}>
        <ul className={styles.list}>
          {items.map(item => (
            <li key={item.id} className={styles.listItem}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.number}>{item.number}</p>
              <button
                type="button"
                onClick={() => {
                  onDeleteContact(item.id);
                }}
                className={styles.button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
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
