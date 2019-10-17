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
    LogoImgURL: 'https://www.afakelandingimage.com/url',
    ShowcasedTopicsIDs: [
      'afaketopicid',
    ],
    Sections: [
      {
        Elements: [
          {
            _id: 'afakeelementid',
            IconImgURL: 'https://www.afakeelementimage.com/url',
            ElementTitle: 'afakeelementtitle',
          },
        ],
        _id: 'afakesectionid',
        Title: 'afakesectiontitle',
        Description: 'afakesectiondescription',
        BackgroundImgURL: 'https://www.afakesectionimage.com/url',
      }
    ],
    createdAt: '2019-10-03T20:37:42.753Z',
    updatedAt: '2019-10-03T20:37:42.753Z',
    _v: 1,
  };
}