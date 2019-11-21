// Common imports.
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

// Project imports.
import landingReducer from './landingReducer';
import authReducer from './authReducer';

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