import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Platform, TouchableOpacity } from "react-native";
import * as clndr from "expo-calendar";
import { Stack, useRouter } from "expo-router";
import { Agenda, Calendar } from 'react-native-calendars';

export default function Calendario() {
  const [calendars, setCalendars] = useState<clndr.Calendar[]>([]);
  useEffect(() => {
    (async () => {
      const { status } = await clndr.requestCalendarPermissionsAsync();
      if (status === "granted") {
        setCalendars(await clndr.getCalendarsAsync(
          clndr.EntityTypes.EVENT
        ));
        console.log("Here are all your calendars:");
        console.log({ calendars });
      }
    })();

  }, []);
  let items = {};
  const hoy = new Date().toISOString().slice(0,10)
  items[hoy] = [{ name: 'Bici', height: 1, day: 'si', idRuta: 1 }];

  const router = useRouter();
       
  return (
      <><Stack.Screen options={{ title: "Calendario" }} /><Agenda
      items={items}
      renderItem={(item: any, isFirst) => (
        <TouchableOpacity style={styles.item} onPress={() => router.push('/rutas/mapa/' + item.idRuta) }>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )} /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});
