import Contact from "../model/Contact";
import {useState} from "react";
import FormContact from "./FormContact";

export const ContactMain = () => {

    const dummieData = [
        new Contact(1,"Francisco","Briceño", true),
        new Contact(2,"Nombre","Apellido", true),
        new Contact(3,"Nombre","Apellido", true)
    ];

    const [contacts, setcontacts] = useState(dummieData);

    const  [contactSelected, setcontactSelected] = useState({});

    const addNewContact = (contact) => {
        contact.id = contacts.length+1;
        setcontacts([...contacts, contact]);
    }

    const updateContacts = (contact) => {
        const contactListUpdated = contacts.map((contactToUpdate) => {
            if(contactToUpdate.id===contact.id){
                return contact;
            }
            return contactToUpdate;
        });

        setcontacts(contactListUpdated);
    }

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
                                <i style={{"cursor":"pointer"}} className={"bi bi-pencil-fill"}
                                   onClick={() => selectContact(contacto)}>

                                </i>
                            </div>
                        )
                    }
                </div>
            </div>

            <FormContact agregar={addNewContact}
                         updateContactSelected={setcontactSelected}
                         contactSelected={contactSelected}
                         actionUpdateContactList={updateContacts}/>
        </>

    )
}