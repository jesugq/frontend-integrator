const LANDING_URL = 'http://ing.pue.itesm.mx:8000/landingpages';

export const fetchLanding = () => {
  return (dispatch, getState) => {
    fetch(LANDING_URL)
      .then(data => {
        console.log("Landing Fetch Successful:" + data);
        dispatch({ type: 'LANDING_SUCCESS', data });
      })
      .catch(error => {
        console.log("Landing Fetch Failure:" + error);
        dispatch({ type: 'LANDING_FAILURE', error });
      });
  }
}