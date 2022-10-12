import Contact from "../model/Contact";
import {useEffect, useRef} from "react";

export default function FormContact({agregar, contactSelected}) {

    const nombre = useRef("");
    const apellido = useRef("");

    const form = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const contacto = new Contact(nombre.current.value, apellido.current.value, true);
        form.current.reset();
        agregar(contacto);
    };

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
                <button type={"submit"}> Agregar</button>
            </form>
        </>
    )
}