// Global styles
import 'styles/styles.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'views/App';

const $root = document.getElementById('root');
window.drift.load(DRIFT_WRITE_KEY);
window.fbq('init', PIXEL_WRITE_KEY);
window.ga('create', GOOGLE_WRITE_KEY, 'auto');

render(<AppContainer children={<App />} />, $root);

if (module.hot) {
  module.hot.accept('views/App', () => {
    // Reloading doesn't work without this line
    require('views/App'); // eslint-disable-line
    render(<AppContainer children={<App />} />, $root);
  });
}
