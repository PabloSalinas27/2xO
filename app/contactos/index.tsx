import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";
import Contacto from "./contacto";
import { useAppSelector } from "../redux/hooks";
import { Stack } from "expo-router";
import { useState } from "react";

export default function ContactsList() {
  const contacts = useAppSelector((state) => state.contactos.contactos);
  const placeholder = `Buscar en ${contacts.length} contactos`;
  const [busqueda, setBusqueda] = useState("");
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
    <TextInput placeholder={placeholder}
    onChange={(e) => {setBusqueda(e.nativeEvent.text)}}
    value={busqueda}
    />
    <FlatList
      data={contacts.filter((contact) => (contact.name.includes(busqueda)))}
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