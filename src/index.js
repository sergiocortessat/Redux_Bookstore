import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import BookReducer from './reducers/books';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import initialState from './staticData';

const store = createStore(BookReducer, initialState);
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
