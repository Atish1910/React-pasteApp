import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  pastes : localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []

}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addTopastes: (state, action) => {

    },
    updateToPastes: (state,action) => {
    },
    resetAllPastes: (state, action) => {
    },
    removeFromPastes : (state , action) =>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { addTopastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer