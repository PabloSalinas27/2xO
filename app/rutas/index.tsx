import { Stack } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { useAppSelector } from "../redux/hooks";
import Ruta from "./ruta";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Rutas() {
  const rutas = useAppSelector((state) => state.rutas.rutas);
  const [busqueda, setBusqueda] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Buscar en rutas"
        onChange={(e) => {
          setBusqueda(e.nativeEvent.text);
        }}
        value={busqueda}
      />
      <Stack.Screen options={{ title: "Rutas" }} />
      <FlatList
        data={rutas.filter((ruta) => ruta.name.includes(busqueda))}
        renderItem={(item) => <Ruta ruta={item.item} />}
      />
    </View>
  );
}
