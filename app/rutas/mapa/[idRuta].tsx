import { Stack, useSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useAppSelector } from "../../redux/hooks";

const navarra = {
  latitude: 42.830700975992464,
  longitude: -1.65735200211997,
  latitudeDelta: 0.3922,
  longitudeDelta: 0.3421,
};

export default function MapaRuta() {
  const routeParams = useSearchParams();
  const localizacion = useAppSelector((state) => state.localizacion);
  const ruta = useAppSelector((state) => state.rutas.rutas.find((ruta) => ruta.id == routeParams.idRuta));
  let coords = navarra;
  if (localizacion.status == "ok"){
    coords = {...coords, ...localizacion.localizacion }
  }
  if (!ruta){
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Mapa" }} />
        <Text>No se ha encontrado la ruta</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Mapa" }} />
      <MapView
        style={styles.map}
        initialRegion = {coords}
      >
        {localizacion.status == "ok" && 
        <Marker coordinate={coords}>
          <Text style={{fontSize: 40}}>🚲</Text>
        </Marker>}
        { ruta.puntos.map((punto, i) => <Marker key={i.toString() + "puntos"} coordinate={punto} />) }
        { ruta.puntos.length > 1 && <Polyline coordinates={ruta.puntos} /> }
        
      </MapView>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
