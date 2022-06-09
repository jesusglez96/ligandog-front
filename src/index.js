import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes/RoutesApp';
import './scss/general.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <RoutesApp />,
);
