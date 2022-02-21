import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';

window.store = store;

const initializeReact = () => {
  const rootEl = document.getElementById('app');
  const rootComp = <Provider store={store}><App /></Provider>;
  render(rootComp, rootEl);
};

initializeReact();
