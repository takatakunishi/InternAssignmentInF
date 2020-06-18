import { combineReducers } from 'redux'
import user from './UsersData'
import prase from './PraseData'

const rootReducer = combineReducers({
    user,
    prase,
})

export default rootReducer