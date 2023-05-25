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

const rutas = [
    {
        id: "1",
        name: "Ruta 1",
        puntos: [
            {
                id: "1",
                name: "Punto 1",
                latitud: 1,
                longitud: 1
            },
                        {
                id: "2",
                name: "Punto 2",
                latitud: 2,
                longitud: 2
            },            {
                id: "3",
                name: "Punto 3",
                latitud: 3,
                longitud: 3
            }
        ]
    },
    {
        id: "2",
        name: "Ruta 2",
        puntos: [
            {
                id: "1",
                name: "Punto 1",
                latitud: 1,
                longitud: 1
            },
                        {
                id: "2",
                name: "Punto 2",
                latitud: 2,
                longitud: 2
            },            {
                id: "3",
                name: "Punto 3",
                latitud: 3,
                longitud: 3
            }
        ]
    }
];