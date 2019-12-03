// URL of the server's users endpoints. Could use security protocols.
const USER_URL = 'http://localhost:8000/users';

/**
 * Create User uses fetch's optional parameters argument to define the fetch
 * request as a POST method including a body, or payload. If the server
 * returns a success result, said result is added to the user store state.
 * @param {fields} fields 
 */
export const createUser = (fields) => {
  const params = {
    method: 'POST',
    body: JSON.stringify(fields),
  }  
  return (dispatch, getState) => {
    fetch(USER_URL, params)
      .then(response => response.json())
      .then(data => {
        console.log("User Creation Successful:", data);
        dispatch({type: 'USER_CREATE_SUCCESS', payload: data});
      })
      .catch(error => {
        console.log("User Creation Failure:", error);
        dispatch({type: 'USER_CREATE_FAILURE'})
      });
  }
}

/**
 * Fetch User simply gets the user in question by calling the api url, and
 * appending the user's uid into the url.
 * @param {fields} fields 
 */
export const fetchUser = (fields) => {
  fields.uid = '5db48a252f3af03923defe82';

  return (dispatch, getState) => {
    var url = USER_URL.concat('/').concat(fields.uid);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('User Fetch Successful:', data);
        dispatch({type: 'USER_FETCH_SUCCESS', payload: data});
      })
      .catch(error => {
        console.log('User Fetch Failure:', error);
        dispatch({type: 'USER_FETCH_FAILURE'});
      });
  }
}