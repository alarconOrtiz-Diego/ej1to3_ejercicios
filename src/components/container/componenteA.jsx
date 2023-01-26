import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';

const ComponenteA = () => {

    const contactoPrueba = new Contacto("Diego", "Alarcon", "diegoalarcondrum@gmail.com", true)

    return (
        <div>
            <h2>
                Nombre completo: {contactoPrueba.nombre} {contactoPrueba.apellido}
            </h2>
            <h3>
                Email: {contactoPrueba.email}
            </h3>
            <ComponenteB contacto={ contactoPrueba } />
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    conectado: PropTypes.bool
};


export default ComponenteA;
