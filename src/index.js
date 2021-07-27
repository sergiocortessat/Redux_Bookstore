import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import BookReducer from './reducers/books';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const initialState = {
  books: [
    { id: uuidv4(), title: 'The Lord of the Rings', category: 'Fiction' },
    { id: uuidv4(), title: 'The Return of the King', category: 'Fiction' },
  ],
};
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
