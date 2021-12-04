import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// Import the reducers
import calegReducer from './reducers/caleg'
import regionReducer from './reducers/region'
import authReducer from './reducers/auth'
import userReducer from './reducers/user'
import parpolReducer from './reducers/parpol'
import dapilReducer from './reducers/dapil'

const reducers = combineReducers({
  caleg: calegReducer,
  region: regionReducer,
  auth: authReducer,
  user: userReducer,
  parpol: parpolReducer,
  dapil: dapilReducer
})

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middleware));

export default store;


// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import calegReducer from './reducers/caleg'
// import regionReducer from './reducers/region'
// import authReducer from './reducers/auth'

// const rootReducer = combineReducers({
  // caleg: calegReducer,
  // region: regionReducer,
  // auth: authReducer
// })


// const store = createStore(rootReducer, applyMiddleware(thunk))

// export default store