import React, { Component, useState } from 'react';
import Card from './Card';


function form() {
    const [nombreMascota, setNombreMascota] = useState("");
    const [especieMascota, setEspecieMascota] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSumbmit = (e) => {
        e.preventDefault();
        

        if (validateForm()) {
            setIsSubmitted(true);
            setError('');
        } else {
            setIsSubmitted(false);
            setError('Por favor chequea que la información sea correcta');
        }
        const validateForm = () => {
            return (
                nombreMascota.length >= 3 &&
                !nombreMascota.startsWith(' ') &&
                especieMascota.length >= 6
            );
        }
    };

    return (
        <div>
            <form onSubmit={handleSumbmit}>
                <label>
                    Nombre de la mascota:
                    <input
                        type="text"
                        value={nombreMascota}
                        onChange={(e) => setNombreMascota(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Especie de la mascota:
                    <input
                        type="text"
                        value={especieMascota}
                        onChange={(e) => setEspecieMascota(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isSubmitted && (
                <Card nombreMascota={nombreMascota} especieMascota={especieMascota} />
            )}
        </div>
    );
}

export default form;