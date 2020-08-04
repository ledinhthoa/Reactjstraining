import React from 'react';
import {render} from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  {  Provider  }  from  'react-redux';
import  {store}  from  './reducer/store';

render(
  <Provider  store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)


serviceWorker.unregister();