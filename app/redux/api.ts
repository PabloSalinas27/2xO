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
