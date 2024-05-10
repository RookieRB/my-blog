import {createSlice} from '@reduxjs/toolkit';


const currentUser =createSlice({
  name: 'currentUser',
  initialState: {
    userInfoData: {},
  },
  reducers:{
    changeUserInfoData(state, {payload}){
      state.userInfoData = payload;
    },
  }
})

export const {changeUserInfoData} = currentUser.actions;

export default currentUser.reducer;