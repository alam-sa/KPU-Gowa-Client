const initialState = {
  calegs: [],
  caleg: {},
  validate: [],
  register: [],
  verified: [],
  loading: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'CALEG/ADDCALEGLIST':
      return { ...state, calegs: payload }
    case 'CALEG/ADDCALEG':
      return { ...state, caleg: payload }
    case 'CALEG/ADDCALEGREGISTER':
      return { ...state, register: payload }
    case 'CALEG/ADDCALEGVALIDATE':
      return { ...state, validate: payload }
    case 'CALEG/ADDCALEGVERIFIED':
    return { ...state, verified: payload }
    case 'LOADING/CHANGELOADINGCALEG':
      return { ...state, loading: payload }
    // case 'FAVORITES/ADDFAVORITEBOOK':
    //   return { ...state, favoriteBooks: [...state.favoriteBooks, payload] }
    default:
      return state
  }
}

export default reducer