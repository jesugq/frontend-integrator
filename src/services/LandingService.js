const LANDING_URL = 'http://ing.pue.itesm.mx:8000/landingpages';

export const fetchLanding = async(setStateLanding) => {
  fetch(LANDING_URL)
    .then(response => response.json())
    .then(result => {
      console.log('LandingService Succesful:', result);
      setStateLanding(result, true);
    })
    .catch(error => {
      console.log('Error found at LandingService:', error);
      setStateLanding(mockLanding(), false);
    });
}

export const mockLanding = function() {
  return {
    _id: 'afakelandingid',
    LogoImgURL: 'http://via.placeholder.com/1920x1080',
    ShowcasedTopicsIDs: [
      'afaketopicid',
    ],
    Sections: [
      {
        Elements: [
          {
            _id: 'afakeelementid',
            IconImgURL: 'http://via.placeholder.com/1920x1080',
            ElementTitle: 'afakeelementtitle',
          },
        ],
        _id: 'afakesectionid',
        Title: 'afakesectiontitle',
        Description: 'afakesectiondescription',
        BackgroundImgURL: 'http://via.placeholder.com/1920x1080',
      }
    ],
    createdAt: '2019-10-03T20:37:42.753Z',
    updatedAt: '2019-10-03T20:37:42.753Z',
    _v: 1,
  };
}