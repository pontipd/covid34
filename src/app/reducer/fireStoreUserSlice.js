import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    docId: null,
    userDocFullName: null,
    userDocAge: null,
    userDocGender: null,
}

const fireStoreUserSlice = createSlice({
    name: 'fireStoreUserDoc',
    initialState,
    reducers: {
        setFireStoreUserDoc: (state, action) => {
            state.docId = action.payload.docId
            state.userDocFullName = action.payload.userName
            state.userDocAge = action.payload.userDocAge
            state.userDocGender = action.payload.userDocGender
        },
        setFireStoreUserDocLogOutState: (state) => {
            state.docId = null
            state.userDocFullName = null
            state.userDocAge = null
            state.userDocGender = null
        }
    }
});

export const { setFireStoreUserDoc, setFireStoreUserDocLogOutState } = fireStoreUserSlice.actions

export const selectUserDocId = state => state.fireStoreUserDoc.docId
export const selectUserDocFullName = state => state.fireStoreUserDoc.userDocFullName
export const selectUserDocAge = state => state.fireStoreUserDoc.userDocAge
export const selectUserDocGender = state => state.fireStoreUserDoc.userDocGender

export default fireStoreUserSlice.reducer