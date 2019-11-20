// Common imports.
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

// Project imports.
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import fbConfig from './config/fbConfig';

// Project css.
import './index.css';
import 'antd/dist/antd.css';
import 'mdbreact/dist/css/mdb.css'

/**
 * Creation of a store. The store is a globally available component provided
 * by Redux. By applying Firebase's configuration alongside of it, it is
 * possible to have both the authentication and global functions available.
 */
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

/**
 * Creation of the render, using a library called Provider, which is the
 * React Redux delegate of providing said store to the entire project. This
 * is implied by the fact that the App is nested inside of the Provider.
 */
const render = (
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM presents the render, and serviceWorker is closed as it is not used.
ReactDOM.render(render, document.getElementById('root'));
serviceWorker.unregister();

