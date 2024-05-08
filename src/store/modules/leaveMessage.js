import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import {
  getLeaveMessageData,
  getFacialImgsUrlData
}
from '@/services/modules/leaveMessage'

export const fetchLeaveMessageDataAction = createAsyncThunk("messageLeaveData",(payload,{dispatch})=>{
  getLeaveMessageData().then((res)=>{
    dispatch(changeMessageLeaveDataAction(res))
  })
  getFacialImgsUrlData().then((res)=>{
    dispatch(changeFacialImgsUrlAction(res))
  })
})



const messageLeaveSlice = createSlice({
    name: 'leaveMessage',
    initialState: {
      messageLeaveData: [],
      facialImgsUrlData:[],
    },
    reducers:{
      changeMessageLeaveDataAction(state,{payload}){
        state.messageLeaveData = payload;
      },
      changeFacialImgsUrlAction(state,{payload}){
        state.facialImgsUrlData = payload;
      }
    },
    extraReducers: builder => {
      builder
      .addCase(fetchLeaveMessageDataAction.pending,(state,actions)=> {
        console.log("pending-----------")
      })
      .addCase(fetchLeaveMessageDataAction.fulfilled,(state,{payload})=> {
        // state.goodPriceInfo = payload
      })
      .addCase(fetchLeaveMessageDataAction.rejected,(state,actions)=> {
        console.log("reject_------------------")
      })
    }
})

export const { 
  changeMessageLeaveDataAction,
  changeFacialImgsUrlAction

 }= messageLeaveSlice.actions;

export default messageLeaveSlice.reducer;