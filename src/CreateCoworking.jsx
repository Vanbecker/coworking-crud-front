import React, { useState } from 'react';

const CreateCoworking = () => {
    const [formData, setFormData] = useState({
        title: '…',
        description: '…',
        address: '…'
    });




    const handleChange = (event) => {
        event.preventDefault();

        setFormData({
            title: event.target.title.value,
            description: event.target.description.value,
            address: event.target.address.value
        })
    }

    return (
        <div>
            <h2>Create Coworking</h2>
            <form onSubmit={handleChange}>
                <label>Titre</label>
                <input type="text" name="title" />

                <label>Description</label>
                <textarea name="description" cols="30" rows="10"></textarea>

                <label>Adresse</label>
                <input type="text" name="address" />

                <button type="submit">Créer</button>
            </form>

            <div>
                <h3>Resultat Formulaire</h3>
                <p>Titre: {formData.title}</p>
                <p>Description: {formData.description}</p>
                <p>Address: {formData.address}</p>
            </div>
        </div>
    );
};

export default CreateCoworking;


