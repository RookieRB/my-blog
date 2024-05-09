import {createSlice} from '@reduxjs/toolkit';


const currentUser =createSlice({
  name: 'currentUser',
  initialState: {
    userInfo: {},
    token: "",
  },
  reducers:{
    changeUserInfoData(state, {payload}){
      state.userInfo = payload;
    },
    changeTokenData(state, {payload}){
      state.token = payload;
    }
  }
})

export const {changeUserInfoData, changeTokenData} = currentUser.actions;

export default currentUser.reducer;