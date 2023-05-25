import { View } from "react-native";
import Contactos from "./contactos";
import Constants from "expo-constants";
import { obtenerContactosLocales } from "../redux/actionCreators";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

export default function Hexavista() {
  useEffect(() => {useAppDispatch(obtenerContactosLocales())}, [useAppDispatch]);
  return (
    <View style={{paddingTop: Constants.statusBarHeight}}>
      <Contactos></Contactos>
    </View>
  );
}
