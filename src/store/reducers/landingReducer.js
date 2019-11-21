const initState = {
  fetched: false,
  data: {
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
  }
}

const landingReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        fetched: true,
        data: action.data,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        fetched: false,
        data: initState.data,
      }
    default:
      return {
        ...state,
        fetched: false,
        data: initState.data,
      }
  }
}

export default landingReducer;