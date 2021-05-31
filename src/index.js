import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import {Provider} from 'mobx-react';

import ShoeStore from './stores/ShoeStore';


import './css/styles.css';


const Root = (
  <Provider ShoeStore={ShoeStore}>
    <App />
  </Provider>
)


ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
