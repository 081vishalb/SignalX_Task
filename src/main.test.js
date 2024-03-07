// main.test.js (assuming it's the entry point)

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main'; // Assuming Main is the entry point component

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});
