import { combineReducers } from '@reduxjs/toolkit'

import userReducer from './reducer/userSlice'
import counterReducer from './reducer/counterSlice'
import fireStoreUserReducer from './reducer/fireStoreUserSlice'

const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
    fireStoreUserDoc: fireStoreUserReducer,
})

export default rootReducer