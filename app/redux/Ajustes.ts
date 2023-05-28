import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ajuste } from "../settings/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "./hooks";


const auth = getAuth();
type tupla = {usuario: string, contra: string};
export const iniciarSesion = createAsyncThunk(
  "obtenerLocalizacion",
  async (a: tupla) => {
   await signInWithEmailAndPassword(auth,a.usuario,a.contra);
   return;
  }
);
const ajustesSlice = createSlice({
  name: "ajustes",
  initialState: { ajustes: [] as Ajuste[], ajustesProvisionales: [] as Ajuste[], status: "" },
  reducers: {
    ajustesCambiados: (state) => {
        state.ajustes = state.ajustesProvisionales;
    },
    ajustesProvisionales: (state, action: PayloadAction<Ajuste[]>) => {
        state.ajustesProvisionales = action.payload;
    },
    upsertAjustesProvisionales: (state, action: PayloadAction<Ajuste>) => {
        const i = state.ajustesProvisionales.findIndex((x) => x.id == action.payload.id);
        i > -1 ? state.ajustesProvisionales[i] = action.payload : state.ajustesProvisionales.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(iniciarSesion.pending, (state, action) => {
        console.log("onIt");
        state.status = "onIt";
    });
    builder.addCase(iniciarSesion.fulfilled, (state, action) => {
        console.log("ok");
        state.status = "ok";
    });
    builder.addCase(iniciarSesion.rejected, (state, action) => {
        console.log(action.error);
        state.status = action.error.message;
    });
  }
});

export default ajustesSlice.reducer;
export const { ajustesCambiados, ajustesProvisionales, upsertAjustesProvisionales } = ajustesSlice.actions;