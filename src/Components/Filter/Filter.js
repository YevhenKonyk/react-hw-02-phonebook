import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter, onClearFilter }) => (
  <div className={styles.container}>
    <div className={styles.controls}>
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact name"
        className={styles.input}
      />
      <button type="button" onClick={onClearFilter} className={styles.button}>
        Clear
      </button>
    </div>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};

export default Filter;
