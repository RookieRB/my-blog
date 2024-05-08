import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home";
import messageLeaveReducer from "./modules/leaveMessage";

const store = configureStore({
  reducer: {
    home: homeReducer,
    leaveMessage: messageLeaveReducer,
  }
})

export default store