import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import {
  getLeaveMessageData
}
from '@/services/modules/leaveMessage'

export const fetchLeaveMessageDataAction = createAsyncThunk("messageLeaveData",(payload,{dispatch})=>{
  getLeaveMessageData().then((res)=>{
    dispatch(changeMessageLeaveDataAction(res))
  })
})



const messageLeaveSlice = createSlice({
    name: 'leaveMessage',
    initialState: {
      messageLeaveData: [],
    },
    reducers:{
      changeMessageLeaveDataAction(state,{payload}){
        state.messageLeaveData = payload;
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

export const { changeMessageLeaveDataAction }= messageLeaveSlice.actions;

export default messageLeaveSlice.reducer;