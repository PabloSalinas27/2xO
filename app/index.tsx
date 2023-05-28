import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import { Link, Stack } from "expo-router";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { obtenerContactosLocales } from "./redux/Contactos";
import { obtenerRutas } from "./redux/Rutas";
import { obtenerLocalizacion } from "./redux/Localizacion";


export default function App() {
  useEffect(() => {useAppDispatch(obtenerContactosLocales())}, [useAppDispatch]);
  useEffect(() => {useAppDispatch(obtenerRutas())}, [useAppDispatch]);
  useEffect(() => {useAppDispatch(obtenerLocalizacion())}, [useAppDispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "" }} />

      <View style={styles.row}>
        <Link style={[styles.button2, { backgroundColor: "#04f390" }]} href="/mapa">
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Mapa</Text>
          </View>
        </Link>

        <Link style={[styles.button2, { backgroundColor: "#08c3ff" }]} href="/contactos">
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Contactos</Text>
          </View>
        </Link>
      </View>

      <View style={styles.row}>
        <Link style={[styles.button2, { backgroundColor: "#effb36" }]} href="/rutas">
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Rutas</Text>
          </View>
        </Link>

        <Link style={[styles.button2, { backgroundColor: "#ffcb7c" }]} href="/calendario">
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Calendario</Text>
          </View>
        </Link>
      </View>


    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 10, // Ajusta el margen horizontal aquí según tus necesidades
    marginTop: 10, // Agrega un margen superior si es necesario
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth / 2.2,
    height: windowHeight / 2.3,
    marginHorizontal: 5, // Espacio entre los elementos del contenedor row
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 28,
    color: "white",
    fontWeight: "bold", //negrita
    textShadowColor: "black", // Agrega el color del borde
    textShadowOffset: { width: 1, height: 1 }, // Ajusta el desplazamiento del borde
    textShadowRadius: 2, // Ajusta el radio del borde
  },
});
