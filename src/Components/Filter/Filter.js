import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter, onClearFilter }) => (
  <>
    <input type="text" value={value} onChange={onChangeFilter} />
    <button type="button" onClick={onClearFilter}>
      Clear
    </button>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};

export default Filter;
