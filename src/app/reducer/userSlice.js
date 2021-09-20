import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    userName: null,
    userEmail: null,
    userPhoto: null,
    userType: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userId = action.payload.userId
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.userPhoto = action.payload.userPhoto
        },
        setUserLogOutState: (state) => {
            state.userId = null
            state.userName = null
            state.userEmail = null
            state.userPhoto = null
        },
        setTypeOfUser: (state, action) => {
            state.userType = action.payload.userType
        },
        setTypeLogOutState: (state) => {
            state.userType = null
        }
    }
});

export const { setActiveUser, setUserLogOutState, setTypeOfUser, setTypeLogOutState } = userSlice.actions

export const selectUserId = state => state.user.userId
export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectUserPhoto = state => state.user.userPhoto
export const selectUserType = state => state.user.userType

export default userSlice.reducer