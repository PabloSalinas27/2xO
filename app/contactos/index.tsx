import { Text, View, StyleSheet, FlatList } from "react-native";
import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import Contacto from "./contacto";
import { useAppSelector } from "../redux/hooks";
import { Stack } from "expo-router";
export default function ContactsList() {
  const contacts = useAppSelector((state) => state.contactos.contactos);
  if (contacts.length === 0) {
    return (
        <View>
        <Stack.Screen options={{ title: "Sin contactos" }} />
            <Text>No hay contactos</Text>
        </View>
    );}
  return (
    <View>
      <Stack.Screen options={{ title: "Contactos" }} />
    <Text>Contacts: {contacts.length}</Text>
    <FlatList
      data={contacts}
      renderItem={(item) => (<Contacto contact={item.item} />)}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    border: "1px solid #d9d9d9",
  },
});