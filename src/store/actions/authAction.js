import { createUser, fetchUser } from './userActions';

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((data) => {
            dispatch({type: 'LOGIN_SUCCESS', data })
            dispatch(fetchUser({uid: data.user.uid}))
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}


export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    console.log('New User:', newUser);
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((data) => {
            firestore.collection('users').doc(data.user.uid).set({
                firstName: newUser.name,
                lastName: newUser.name,
                initial: newUser.name[0]
            })
            dispatch({ type: 'SIGNUP_SUCCESS', data})
            newUser.uid = data.user.uid;
            dispatch(createUser(newUser))
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}
