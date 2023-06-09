import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useAppSelector } from "../redux/hooks";

const navarra = {
  latitude: 42.830700975992464,
  longitude: -1.65735200211997,
  latitudeDelta: 0.3922,
  longitudeDelta: 0.3421,
};

export default function Mapa() {
  const localizacion = useAppSelector((state) => state.localizacion);
  let coords = navarra;
  if (localizacion.status == "ok"){
    coords = {...coords, ...localizacion.localizacion }
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
