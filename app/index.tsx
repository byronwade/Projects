import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import './app.global.css';
const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;
import App from './app'
import Home from './components/home'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <App>
        <Home />
      </App>
    </AppContainer>,
    document.getElementById('root')
  );
});
