const initialState = {
  dapils: [],
  loading: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'DAPIL/ADDDAPILLIST':
      return { ...state, dapils: payload }
    case 'LOADING/CHANGELOADINGPARPOLS':
      return { ...state, loading: payload }
    // case 'FAVORITES/ADDFAVORITEBOOK':
    //   return { ...state, favoriteBooks: [...state.favoriteBooks, payload] }
    default:
      return state
  }
}

export default reducer