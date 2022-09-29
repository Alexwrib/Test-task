import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import contactSlice from "./slices/contactSlice";



export const store = configureStore({
    reducer: {
        user: userReducer,
        users: contactSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;