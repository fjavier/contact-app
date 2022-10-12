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

    const  [contactSelected, setContactSelected] = useState({});

    const addNewContact = (contact) => {
        setcontacts([...contacts, contact]);
    }

    const selectContact = (contact) => {
        console.log(contact);
        setContactSelected((prev) => {
            return {...prev, contact};
        });
        console.log(contactSelected);
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
                            <p key={index}>
                                <span>{contacto.activo ? ":)" : ":("}</span>
                                {contacto.nombre + " " + contacto.apellido}
                                <button onClick={() => selectContact(contacto)}>Editar</button>
                            </p>
                        )
                    }
                </div>
            </div>

            <FormContact agregar={addNewContact} contactSelected={contactSelected} />
        </>

    )
}