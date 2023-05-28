import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as Location from "expo-location";

export const obtenerLocalizacion = createAsyncThunk(
  "obtenerLocalizacion",
  async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error("No hay permisos");
      }
      return await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.BestForNavigation});
  }
);

const initialState: {
  localizacion?: Location.LocationObject;
  status: "onIt" | "ok" | { message?: string };
} = {
  localizacion: undefined,
  status: null,
};
const localizacionSlice = createSlice({
  name: "obtenerLocalizacion",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obtenerLocalizacion.pending, (state, action) => {
        state.status = "onIt";
    });
    builder.addCase(obtenerLocalizacion.fulfilled, (state, action) => {
        state.localizacion = action.payload;
        state.status = "ok";
    });
    builder.addCase(obtenerLocalizacion.rejected, (state, action) => {
        state.status = action.error;
    });
  },
});

export const {} = localizacionSlice.actions;

export default localizacionSlice.reducer;
