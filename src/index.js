import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { getUserLocale } from './utils';

const localeData = getUserLocale();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <IntlProvider
        locale={localeData.locale}
        defaultLocale='en'
        messages={localeData.messages}
      >
        <App />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
