import React, { useState } from 'react';


const ComponenteB = ({ contacto }) => {

    const [conectado, setconexion] = useState(contacto.conectado);

    const cambiarEstado = () => {
        conectado ? setconexion(false) : setconexion(true)
    }

    return (
        <div>
            <h3>
                Estado: {conectado ? "Contacto En Línea" : "Contacto No Disponible"}
            </h3>
            <button onClick={cambiarEstado}>
                Conectar/Desconectar
            </button>
        </div>
    );
};

export default ComponenteB;
