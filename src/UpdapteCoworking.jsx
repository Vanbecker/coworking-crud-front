const UpdateCoworking = ({ coworking }) => {
    // je créé la fonction qui va gérer la soumission du formulaire
    // elle empêche le rechargement de la page
    const handleUpdateSubmit = (event) => {
        event.preventDefault();

        // on récupères les données du formulaire
        // on les stocke dans un objet
        const coworkingRequest = {
            name: event.target.title.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
        };

        // fetch vers l'API pour mettre à jour le coworking
    };

    return (
        <div>
            <h3>Mettre à jour le coworking</h3>
            <form onSubmit={handleUpdateSubmit}>
                <label>Titre</label>
                {/* on utilise les données du coworking pour pré-remplir le formulaire  */}
                <input type="text" name="title" defaultValue={coworking.name} />

                <label>Téléphone</label>
                <input type="text" name="phone" defaultValue={coworking.phone} />

                <label>Adresse</label>
                <input type="text" name="address" defaultValue={coworking.address} />

                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default UpdateCoworking;