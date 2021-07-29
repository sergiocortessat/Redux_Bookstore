import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.scss';
import './CSS/BookList.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import AllReducers from './reducers';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const store = createStore(AllReducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.unregister();
reportWebVitals();
