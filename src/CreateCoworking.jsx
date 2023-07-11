// export default CreateCoworking;

import React, { useState } from 'react';

const CreateCoworking = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Récupérer les données du formulaire
        console.log('Titre:', title);
        console.log('Description:', description);
        console.log('Adresse:', address);
    };

    return (
        <div>
            <h2>Créer un nouveau coworking</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre :</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address">Adresse :</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default CreateCoworking;
