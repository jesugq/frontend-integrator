/**
 * The Initial State of the Landing Store. At first it starts with a state
 * of fetched false, and placeholder data. Once an action type of 
 * LANDING_SUCCESS is given, the state is updated to the payload content.
 */
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

/**
 * Landing Reducer accepts two action types, LANDING_SUCCESS and
 * LANDING_FAILURE, with the default behavior being the same as the failure one.
 * Upon success, the placeholder data is replaced with the real server data, and
 * upon failure, the placeholder stays.
 * @param {state}   state   State of the Landing Store.
 * @param {action}  action  Action that Redux is handling.
 */
const landingReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LANDING_SUCCESS':
      return {
        ...state,
        fetched: true,
        data: action.payload,
      }
    case 'LANDING_FAILURE':
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}

export default landingReducer;