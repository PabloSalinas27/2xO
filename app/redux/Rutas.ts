import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import { getRutasServer, Ruta } from "./api";

export const obtenerRutas = createAsyncThunk(
  "obtenerRutas",
  async () => {
      return await getRutasServer();
  }
);

const initialState: {
  rutas: Ruta[];
  status: "onIt" | "ok" | { message?: string };
} = {
  rutas: [],
  status: null,
};
const localizacionSlice = createSlice({
  name: "obtenerLocalizacion",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obtenerRutas.pending, (state, action) => {
        state.status = "onIt";
    });
    builder.addCase(obtenerRutas.fulfilled, (state, action) => {
        state.rutas = action.payload;
        state.status = "ok";
    });
    builder.addCase(obtenerRutas.rejected, (state, action) => {
        state.status = action.error;
    });
  },
});

export default localizacionSlice.reducer;
