import { Button, FlatList } from "react-native"
import Setting from "./item"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ajustesCambiados, ajustesProvisionales, iniciarSesion, upsertAjustesProvisionales } from "../redux/Ajustes";
import { Stack } from "expo-router";
import { obtenerContactosLocales } from "../redux/Contactos";
import { obtenerRutas } from "../redux/Rutas";
import { obtenerLocalizacion } from "../redux/Localizacion";

export type Ajuste = typeof ajustesIniciales[0];
const ajustesIniciales = [
    {
        id: 1,
        nombre: "Club",
        valor: "amaya@gmail.com",
    },
    {
        id: 2,
        nombre: "Clave",
        valor: "bici123",
    },
]

export default function Settings() {

    const { ajustes } = useAppSelector((state) => state.ajustes)
    if (ajustes.length == 0) {
        useAppDispatch(ajustesProvisionales(ajustesIniciales))
        useAppDispatch(ajustesCambiados())
    }
    return (
        <>
            <Stack.Screen options={{ title: "Ajustes" }} />
            <Button title="Guardar" onPress={() => { useAppDispatch(ajustesCambiados()) }} />
            <Button title="Iniciar Sesion" onPress={() => { useAppDispatch(iniciarSesion({ usuario: ajustes[0].valor, contra: ajustes[1].valor })) }} />
            <FlatList
                data={ajustes}
                renderItem={({ item }) => (<Setting {...item} />)}
                keyExtractor={(item) => item.id.toString()} /></>
    )
}