const LANDING_URL = 'http://ing.pue.itesm.mx:8000/landingpages';

export const fetchLanding = async(setStateLanding, signal) => {
  fetch(LANDING_URL, { signal: signal })
    .then(response => response.json())
    .then(result => {
      console.log('LandingService Succesful:', result);
      setStateLanding(result, true);
    })
    .catch(error => {
      console.log('Error found at LandingService:', error, signal);
    });
}

export const mockLanding = function() {
  return {
    _id: 'afakelandingid',
    LogoImgURL: 'http://via.placeholder.com/1920x1080',
    Carrousel: [
      'http://via.placeholder.com/1920x1080',
      'http://via.placeholder.com/1920x1080',
    ],
    ShowcasedTopicsIDs: [
      {
        _id: 'afaketopicid0',
        Field: 'afaketopicfield0',
        Name: 'afaketopicname0',
        createdAt: '2019-10-03T20:37:42.753Z',
        updatedAt: '2019-10-03T20:37:42.753Z',
      },
      {
        _id: 'afaketopicid1',
        Field: 'afaketopicfield1',
        Name: 'afaketopicname1',
        createdAt: '2019-10-03T20:37:42.753Z',
        updatedAt: '2019-10-03T20:37:42.753Z',
      },
    ],
    Sections: [
      {
        Elements: [
          {
            _id: 'afakeelementid0',
            IconImgURL: 'http://via.placeholder.com/1920x1080',
            ElementTitle: 'afakeelementtitle0',
          },
          {
            _id: 'afakeelementid1',
            IconImgURL: 'http://via.placeholder.com/1920x1080',
            ElementTitle: 'afakeelementtitle1',
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