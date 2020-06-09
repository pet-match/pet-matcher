import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/AppContext';

// AppProvider is to make the state inside context available to all wrapping components

render(
  <>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
