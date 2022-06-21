import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../featuresRedux/accountSlice";

const store = configureStore({
    reducer: {
      account: accountSlice
    }
})

export default store

