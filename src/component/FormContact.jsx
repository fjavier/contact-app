import Contact from "../model/Contact";
import {useEffect, useRef} from "react";

export default function FormContact({agregar,
                                    contactSelected,
                                    updateContactSelected,
                                    actionUpdateContactList}) {

    const nombre = useRef("");
    const apellido = useRef("");

    const form = useRef();

    useEffect(
        ()=>{
            if(!selectedIsEmpty()){
                nombre.current.value = contactSelected.nombre;
                apellido.current.value = contactSelected.apellido;
            }
        },
        [contactSelected]
    );

    const handleSubmit = event => {
        event.preventDefault();
        if(selectedIsEmpty()){
            addNewContact();
            form.current.reset();
        }else{
            updateContact();
        }

    };

    const addNewContact= () => {
        const contacto = new Contact(0,nombre.current.value, apellido.current.value, true);
        agregar(contacto);
    };

    function updateContact(){
        actionUpdateContactList(
            new Contact(
                contactSelected.id,
                nombre.current.value,
                apellido.current.value,
                contactSelected.active));
    }

    function clear(){
        updateContactSelected({});
        form.current.reset();
    }

    const selectedIsEmpty = ()=>{
        return Object.keys(contactSelected).length==0;
    }

    return (
        <>
            <div>
                <h2>Agregar contacto</h2>
            </div>
            <form id={"add-contact"} ref={form} onSubmit={handleSubmit}>
                <label
                    htmlFor="nombre">
                    Nombre:
                </label>
                <input
                    required ref={nombre}
                    placeholder={"Nombre"}
                    type={"text"}
                    id={"nombre"}/>
                <label htmlFor="apellido">
                    Apellido:
                </label>
                <input required
                       ref={apellido}
                       placeholder={"Apellido"}
                       type={"text"}
                       id={"apellido"}/>
                <button type={"submit"}> { selectedIsEmpty() ? "Agregar" : "Actualizar" }</button>
                {
                    !selectedIsEmpty() && <button type={"button"} onClick={clear} >Cancelar</button>
                }
            </form>
        </>
    )
}