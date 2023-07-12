import React, { useState } from "react";

const ShowCoworking = ({ coworking }) => {
    const handleDelete = () => {
        console.log("coworking supprimé", coworking.id);
    };

    return (
        <article key={coworking.id}>
            <h3>{coworking.name}</h3>
            <p>{coworking.address}</p>
            <p>{coworking.phone}</p>
            <img src={coworking.img} alt={coworking.name} />
            <button ClassName="butsup" onClick={handleDelete}>Supprimer le coworking</button>

        </article>
    );
};

export default ShowCoworking;