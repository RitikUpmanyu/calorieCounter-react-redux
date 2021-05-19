import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {persistGate} from "redux-persist/integration/react"
import {store, persistor} from './store'

ReactDOM.render(
  <React.StrictMode>
    <persistGate persistor={persistor}>
      <App />
    </persistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

