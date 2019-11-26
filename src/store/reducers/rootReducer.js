// Common imports.
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

// Project imports.
import authReducer from './authReducer';
import userReducer from './userReducer';
import landingReducer from './landingReducer';

/**
 * The root reducer allows for the web application to have access to all
 * Redux reducers, such as the auth, or the firebase handler.
 */
const rootReducer = combineReducers({
    auth: authReducer,
    landing: landingReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;