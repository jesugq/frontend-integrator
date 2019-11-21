const initState = {
  uid: null,
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        uid: action.data.user.uid,
        authError: null,
      }
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        uid: null,
        authError: 'Login failed'
      }
    case 'SIGNOUT_SUCCESS':
      console.log('logout success');
      return {
        ...state,
        uid: null,
        authError: null,
      }
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        uid: action.data.user.uid,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        uid: null,
        authError: action.err.message,
      }
    default:
      return state;
  }
}

export default authReducer;