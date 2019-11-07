import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})),
      reactReduxFirebase(fbConfig)
    )
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
