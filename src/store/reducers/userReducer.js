/**
* The Initial State of the User Store. Unlike the auth which handles the uid,
* obtained from Firebase, the user store sole responsibility is to handle the
* contents that the server provides upon signup or signin.
*/
const initState = {
  fetched: false,
  data: {
    uid: null,
    email: '',
    name: '',
    phone: '',
    country: '',
    language: '',
  }
}

/**
 * User Reducer accepts a few action types, such as USER_CREATE_SUCCESS or
 * USER_FETCH_SUCCESS, which would come from signing up or signing in. Otherwise
 * the USER_CREATE_FAILURE or USER_FETCH_FAILURE would take place.
 */
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_CREATE_SUCCESS':
      return {
        ...state,
        fetched: true,
        data: action.payload,
      }
    case 'USER_FETCH_SUCCESS':
        return {
          ...state,
          fetched: true,
          data: action.payload,
        }
    case 'USER_CREATE_FAILURE':
      return {
        ...state,
      }
    case 'USER_FETCH_FAILURE':
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}