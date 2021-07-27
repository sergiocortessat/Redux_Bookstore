import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import AllReducers from './reducers/index';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const store = createStore(AllReducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// serviceWorkerRegistration.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
