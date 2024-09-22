import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root and render the App component inside it
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
