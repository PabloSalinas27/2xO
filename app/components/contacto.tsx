import { Contact } from "expo-contacts";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
const Contacto = ({ contact }: { contact: Contact }) => {
  return (
    <TouchableOpacity onPress={() => {Linking.openURL(`tel:${contact.phoneNumbers[0].number}`)}}>
    <View style={styles.contactCon}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contact?.name[0]}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>{contact?.name}</Text>
        <Text>{contact?.name}</Text>
        <Text style={styles.phoneNumber}>
          {contact?.phoneNumbers ? contact?.phoneNumbers[0]?.number : "No hay número"}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};
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
export default Contacto;