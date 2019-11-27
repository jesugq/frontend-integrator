// URL of the server's landing endpoint. Could use security protocols.
const LANDING_URL = 'http://ing.pue.itesm.mx:8000/landingpages';

/**
 * Fetch Landing is a simple function to return the JSON depiction of the
 * landing page, retrieved from the server. Upon retrieval, the payload is
 * sent to the Landing Reducer to update the state, and upon failure, the type
 * LANDING_FAILURE is sent for consistency.
 */
export const fetchLanding = () => {
  return (dispatch, getState) => {
    fetch(LANDING_URL)
      .then(response => response.json())
      .then(result => {
        console.log("Landing Fetch Successful:", result);
        dispatch({ type: 'LANDING_SUCCESS', payload: result });
      })
      .catch(error => {
        console.log("Landing Fetch Failure:", error);
        dispatch({ type: 'LANDING_FAILURE'});
      });
  }
}