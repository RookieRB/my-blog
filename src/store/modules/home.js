import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { 
  getHomePageData 
} from '@/services/modules/home'


export const fetchHomeDataAction = createAsyncThunk("HomePageData",(payload,{dispatch,getState}) => {
  const homeState = getState().home
  dispatch(changeCurrentPageAction(homeState.currentPage + 1))
  getHomePageData(homeState.currentPage).then((res) => {
    dispatch(changePageDataInfoAction(homeState.pageDataInfo.concat(res.data.data)))
    // dispatch(changeCurrentPageAction())
  })
})

const homeSlice = createSlice({
    name: 'home',
    initialState:{
      pageDataInfo: [],
      currentPage: 1
    },
    reducers:{
      changePageDataInfoAction(state,{payload}){
        state.pageDataInfo = payload
      },
      changeCurrentPageAction(state,{payload}){
        state.currentPage = payload
      }
    },
    extraReducers: builder => {
      builder
      .addCase(fetchHomeDataAction.pending,(state,actions)=> {
        console.log("pending-----------")
      })
      .addCase(fetchHomeDataAction.fulfilled,(state,{payload})=> {
        // state.goodPriceInfo = payload
      })
      .addCase(fetchHomeDataAction.rejected,(state,actions)=> {
        console.log("reject_------------------")
      })
    }
})



export const {
  changePageDataInfoAction,
  changeCurrentPageAction
} = homeSlice.actions

export default homeSlice.reducer