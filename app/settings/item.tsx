import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ajuste } from ".";
import { useAppDispatch } from "../redux/hooks";
import { upsertAjustesProvisionales } from "../redux/Ajustes";
import { TextInput } from "react-native-gesture-handler";

export default function Setting(ajuste: Ajuste) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ajuste.nombre}</Text>
      <TextInput
        style={styles.textInput}
        onChange={(e) =>
          useAppDispatch(
            upsertAjustesProvisionales({ ...ajuste, valor: e.nativeEvent.text })
          )
        }
      >
        {ajuste.valor}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    minWidth: '70%',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width - 20,
    justifyContent: "space-between",
  },
});
