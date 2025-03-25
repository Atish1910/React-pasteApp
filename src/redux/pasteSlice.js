import js from '@eslint/js'
import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
import toast, { Toaster } from 'react-hot-toast'

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
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully")
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id)
      
      if(index >= 0){
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated")
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPastes : (state , action) =>{
      state.pastes.setItem(index, 1);
      
      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if(index >= 0){
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("paste Deleted")
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTopastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer