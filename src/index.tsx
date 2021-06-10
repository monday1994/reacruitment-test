import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import AplicationDrawer from './AplicationDrawer/AplicationDrawer';
import { store, persistor } from './persistor';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
              <AplicationDrawer />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
