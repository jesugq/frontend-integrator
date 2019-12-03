/**
* The Initial State of the User Store. Unlike the auth which handles the uid,
* obtained from Firebase, the user store sole responsibility is to handle the
* contents that the server provides upon signup or signin.
*/
const initState = {
  fetched: false,
  data: {
    _id: null,
    uid: null,
    email: 'afakeemail',
    name: 'afakename',
    phone: 0,
    country: 'afakecountry',
    language: 'afakelanguage',
    tutorDetails: [
      {
        taughtTopicsIDs: [
          'afaketaughttopicid',
        ],
        paymentAccounts: [
          {
            _id: 'afakepaymentaccountid',
            method: 'afakepaymentmethod',
          },
        ],
        skills: [
          {
            _id: 'afakeskillid',
            topicid: 'afakeskilltopicid',
            experience: 'afakeskillexperience',
          }
        ],
        studies: [
          {
            _id: 'afakestudyid',
            institution: 'afakestudyinstitution',
            degree: 'afakestudydegree',
            field: 'afakestudyfield',
            grade: 0,
            startDate: 'afakestudystartdate',
            endDate: 'afakestudyenddate',
            proofDocURL: 'afakestudyproofdocurl',
            validationDate: 'afakestudyvalidationdate',
          }
        ],
        certifications: [
          {
            _id: 'afakecertficationid',
            institution: 'afakecertficationinstitution',
            title: 'afakecertficationtitle',
            date: 'afakecertficationdate',
            diplomaURL: 'afakecertficationdiplomaurl',
          }
        ],
        workExperiences: [
          {
            _id: 'afakeworkexperienceid',
            institution: 'afakeworkexperienceinstitution',
            department: 'afakeworkexperiencedepartment',
            beginDate: 'afakeworkexperiencebegindate',
            endDate: 'afakeworkexperienceenddate',
            stillWorking: false,
          }
        ],
        // Unused or unknown.
        // awards: [],
        // workExperience: []
      }
    ],
  }
}

/**
 * User Reducer accepts a few action types, such as USER_CREATE_SUCCESS or
 * USER_FETCH_SUCCESS, which would come from signing up or signing in. Otherwise
 * the USER_CREATE_FAILURE or USER_FETCH_FAILURE would take place.
 */
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_CREATE_SUCCESS':
      return {
        ...state,
        fetched: true,
        data: action.payload,
      }
    case 'USER_FETCH_SUCCESS':
        return {
          ...state,
          fetched: true,
          data: action.payload,
        }
    case 'USER_CREATE_FAILURE':
      return {
        ...state,
      }
    case 'USER_FETCH_FAILURE':
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}