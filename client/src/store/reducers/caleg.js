const initialState = {
  calegs: [],
  loading: true
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'CALEG/ADDCALEGLIST':
      return { ...state, calegs: payload }
    case 'LOADING/CHANGELOADINGBOOK':
      return { ...state, loading: payload }
    // case 'FAVORITES/ADDFAVORITEBOOK':
    //   return { ...state, favoriteBooks: [...state.favoriteBooks, payload] }
    default:
      return state
  }
}

export default reducer