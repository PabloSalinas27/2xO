import { configureStore } from "@reduxjs/toolkit";
import contactosReducer from "./Contactos";
import localizacionReducer from "./Localizacion";
import rutasReducer from "./Rutas";

export const store = configureStore({
  reducer: {
    contactos: contactosReducer,
    localizacion: localizacionReducer,
    rutas: rutasReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;