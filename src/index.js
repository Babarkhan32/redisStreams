/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listing from "./Listings/Container/Listings";
import reportWebVitals from './reportWebVitals';
import { ContextOneProvider } from './contexts/eventContext';

ReactDOM.render(
  <ContextOneProvider>
    <Listing />
  </ContextOneProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
