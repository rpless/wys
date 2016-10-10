import { combineReducers } from 'redux'
import loginReducer from '../presentation/reducers'

const wysApp = combineReducers({
  login: loginReducer
})

export default wysApp
