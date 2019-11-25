const LANDING_URL = 'http://ing.pue.itesm.mx:8000/landingpages';

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
        dispatch({ type: 'LANDING_FAILURE', payload: error });
      });
  }
}