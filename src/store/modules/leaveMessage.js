import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import {
  getLeaveMessageData,
  getFacialImgsUrlData,
  getLastMessageIdData
}
from '@/services/modules/leaveMessage'

export const fetchLeaveMessageDataAction = createAsyncThunk("messageLeaveData",(payload,{dispatch})=>{
  getLeaveMessageData().then((res)=>{
    dispatch(changeMessageLeaveDataAction(res.data))
  })
  getFacialImgsUrlData().then((res)=>{
    dispatch(changeFacialImgsUrlAction(res.data))
  })
  getLastMessageIdData().then((res) => {
    dispatch(changeLastMessageIdAction(res.data))
  })
})



const messageLeaveSlice = createSlice({
    name: 'leaveMessage',
    initialState: {
      messageLeaveData: [],
      facialImgsUrlData:[],
      lastMessageId:0
    },
    reducers:{
      changeMessageLeaveDataAction(state,{payload}){
        state.messageLeaveData = payload;
      },
      changeFacialImgsUrlAction(state,{payload}){
        state.facialImgsUrlData = payload;
      },
      changeLastMessageIdAction(state,{payload}){
        state.lastMessageId = payload;
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
  changeFacialImgsUrlAction,
  changeLastMessageIdAction

 }= messageLeaveSlice.actions;

export default messageLeaveSlice.reducer;