import { Contact, ContactTypes } from "expo-contacts";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../config/firebase";

const contactosServer: Contact[] = [
  {
    id: "1",
    name: "Bar Juan",
    phoneNumbers: [
      {
        id: "1",
        label: "mobile",
        number: "123456789",
      },
    ],
    contactType: ContactTypes.Person,
  },
];
export const getContactosServer = async (clubIn) => {
  try {
    const club = collection(db, "usuarios");
    const clubAm = await getDocs(club);
    const a = clubAm.docs.map((doc) => doc.data());
    const c = a.flatMap((contacto) => contacto.amaya.contacto);
    return c;
  } catch (e) {
    console.log("error obteniendo contactos server", e);
    return null;
  }
};
export const getRutasServer = async () => {;
  try {
    const club = collection(db, "usuarios");
    const clubAm = await getDocs(club);
    const a = clubAm.docs.map((doc) => doc.data());
    const c = a.flatMap((contacto) => contacto.amaya.rutas);
    console.log("rutas server", c);
    return c;
  } catch (e) {
    console.log("error obteniendo rutas server", e);
    throw e;
  }
};
export type Ruta = (typeof rutas)[0];

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
        longitude: 1,
      },
      {
        id: "2",
        name: "Punto 2",
        latitude: 2,
        longitude: 2,
      },
      {
        id: "3",
        name: "Punto 3",
        latitude: 3,
        longitude: 3,
      },
    ],
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
        longitude: 1,
      },
      {
        id: "2",
        name: "Punto 2",
        latitude: 2,
        longitude: 2,
      },
      {
        id: "3",
        name: "Punto 3",
        latitude: 3,
        longitude: 3,
      },
    ],
  },
];
