import { Contact, ContactTypes } from "expo-contacts";

const contactosServer: Contact[] = [
    {   
        id: "1",
        name: "Bar Juan",
        phoneNumbers: [
            {
                id: "1",
                label: "mobile",
                number: "123456789"
            }
        ],
        contactType: ContactTypes.Person
    }
];
export const getContactosServer = async () => 
    contactosServer
export const getRutasServer = async () =>
    rutas

export type Ruta = typeof rutas[0];

const rutas = [
    {
        id: "1",
        name: "Ruta 1",
        kilometros: 1,
        puntos: [
            {
                id: "1",
                name: "Punto 1",
                latitude: 1,
                longitude: 1
            },
                        {
                id: "2",
                name: "Punto 2",
                latitude: 2,
                longitude: 2
            },            {
                id: "3",
                name: "Punto 3",
                latitude: 3,
                longitude: 3
            }
        ]
    },
    {
        id: "2",
        name: "Ruta 2",
        kilometros: 1,
        puntos: [
            {
                id: "1",
                name: "Punto 1",
                latitude: 1,
                longitude: 1
            },
                        {
                id: "2",
                name: "Punto 2",
                latitude: 2,
                longitude: 2
            },            {
                id: "3",
                name: "Punto 3",
                latitude: 3,
                longitude: 3
            }
        ]
    }
];