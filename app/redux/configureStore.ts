import { configureStore } from "@reduxjs/toolkit";
import contactosReducer from "./actionCreators";

export const store = configureStore({
  reducer: {
    contactos: contactosReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;