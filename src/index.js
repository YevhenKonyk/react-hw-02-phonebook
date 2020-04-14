import React from 'react';
import ReactDOM from 'react-dom';

import Phonebook from './Components/Phonebook';
import './base.css';

ReactDOM.render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>,
  document.getElementById('root'),
);
