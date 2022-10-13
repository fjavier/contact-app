import Contact from "../model/Contact";
import {useState} from "react";
import FormContact from "./FormContact";

export const ContactMain = () => {

    const contactList = [
        new Contact("Francisco","Briceño", true),
        new Contact("Nombre","Apellido", true),
        new Contact("Nombre","Apellido", true)
    ];

    const [contacts, setcontacts] = useState(contactList);

    const  [contactSelected, setcontactSelected] = useState({});

    const addNewContact = (contact) => {
        setcontacts([...contacts, contact]);
    }

    const updateContacts = () => {};


    const selectContact = (contact) => {
        setcontactSelected(()=> {
            return contact;
        });
    };

    return (
        <>
            <div id={"lista-contactos"}>
                <div>
                    <h1>Mis contactos</h1>
                </div>
                <div id={"container"}>
                    {
                        contacts.map((contacto, index)=>
                            <div key={index}>
                                <span>{contacto.activo ? ":)" : ":("}</span>
                                <span>{contacto.nombre + " " + contacto.apellido}</span>
                                <button onClick={() => selectContact(contacto)}>
                                    Editar
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>

            <FormContact agregar={addNewContact}
                         updateContactSelected={setcontactSelected}
                         contactSelected={contactSelected}  />
        </>

    )
}