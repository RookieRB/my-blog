import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home";
import messageLeaveReducer from "./modules/leaveMessage";
import userReducer from "./modules/currentUser";

const store = configureStore({
  reducer: {
    home: homeReducer,
    leaveMessage: messageLeaveReducer,
    currentUser: userReducer
  }
})

export default store