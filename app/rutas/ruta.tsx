
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useAppSelector } from "../redux/hooks";
import { getRutasServer, Ruta } from "../redux/api";
import { useRouter } from "expo-router";

export default function Rutas({ ruta }: { ruta: Ruta }) {
    const router = useRouter();
    return (
    <TouchableOpacity onPress={() => {router.push({pathname: "./rutas/" + ruta.id})}}>
    <View style={styles.contactCon}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{ruta.kilometros + " km"}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>{ruta.name}</Text>
        <Text>{ruta.name}</Text>
        <Text style={styles.phoneNumber}>
          {ruta.kilometros + " km"}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: "#888",
  },
});