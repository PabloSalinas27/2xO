import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { obtenerContactosLocales } from "./redux/actionCreators";


export default function App() {
  useEffect(() => {useAppDispatch(obtenerContactosLocales())}, [useAppDispatch]);
  return (
    <View>
      <Stack.Screen options={{ title: "" }} />
      <Link style={styles.big} href="/contactos">Contactos</Link>
      <Link style={styles.big} href="/mapa">Mapa</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  big: {
    fontSize: 48,
  },
});
