import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import * as Contacts from "expo-contacts";
import { getContactosServer } from "./api";

const initialState : {
  contactos: Contacts.Contact[],
  status?: "onIt" | "ok" | string,
} = {
  contactos: []
}
export const obtenerContactosLocales = createAsyncThunk(
  "obtenerContactos",
  async () => {
    const reqC = Contacts.requestPermissionsAsync();
    const [{status}, a] = await Promise.all([reqC, getContactosServer()]);
    if (status === "granted") {
      let { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      data = a.concat(data);
      if (data.length > 0) {
        return data.filter((contacto) => contacto.phoneNumbers).sort((a, b) => a.name.localeCompare(b.name));
      }
      throw new Error("No hay contactos");
    }
      throw new Error("No hay permisos");
  }
);

const contactosSlice = createSlice({
  name: "contactos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obtenerContactosLocales.pending, (state, action) => {
      state.status = "onIt";
    });
    builder.addCase(obtenerContactosLocales.fulfilled, (state, action) => {
      state.contactos = action.payload;
      state.status = "ok";
    });
    builder.addCase(obtenerContactosLocales.rejected, (state, action) => {
      state.status = action.error.message;
    });
  },
});

export default contactosSlice.reducer;
