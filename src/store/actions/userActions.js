// URL of the server's users endpoints. Could use security protocols.
const USER_URL = 'http://ing.pue.itesm.mx:8000/users';

/**
 * Create User uses fetch's optional parameters argument to define the fetch
 * request as a POST method including a body, or payload. If the server
 * returns a success result, said result is added to the user store state.
 */
export const createUser = (fields) => {
  const params = {
    method: "POST",
    body: fields,
  }
  
  return (dispatch, getState) => {
    fetch(USER_URL, params)
      .then(response => response.json())
      .then(result => {
        console.log("User Creation Successful:", result);
        dispatch({type: 'USER_CREATE_SUCCESS', payload: result});
      })
      .catch(error => {
        console.log("User Creation Failure:", error);
        dispatch({type: 'USER_CREATE_FAILURE'})
      });
  }
}