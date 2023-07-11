// import React, { useState } from 'react';

// const ListCoworkings = () => {
//     const coworkings = [
//         {
//             id: 1,
//             name: "Coworking 1",
//             address: "Bordeaux",
//             phone: "123456789",
//             img: "https://picsum.photos/200/300",
//         },
//         {
//             id: 2,
//             name: "Coworking 2",
//             address: "Merignac",
//             phone: "123456789",
//             img: "https://picsum.photos/200/300",
//         },
//         {
//             id: 3,
//             name: "Coworking 3",
//             address: "Bordeaux",
//             phone: "123456789",
//             img: "https://picsum.photos/200/300",
//         },
//         {
//             id: 4,
//             name: "Coworking 4",
//             address: "Eysines",
//             phone: "123456789",
//             img: "https://picsum.photos/200/300",
//         },
//         {
//             id: 5,
//             name: "Coworking 5",
//             address: "Lormont",
//             phone: "123456789",
//             img: "https://picsum.photos/200/300",
//         },
//     ];



// // je créé un state pour stocker le filtre sélectionné
// // par défaut le filtre est sur Bordeaux
// const [filter, setFilter] = useState("Bordeaux");

// // au click sur un bouton
// // je modifie le state filter
// // pour lui donner en valeur le nom de la ville cliquée
// // avec la fonction setFilter
// // cette fonction recharge le composant automatiquement
// const handleFilterClickBordeaux = () => {
//     setFilter("Bordeaux");
// };

// const handleFilterClickMerignac = () => {
//     setFilter("Merignac");
// };

// const handleFilterClickLormont = () => {
//     setFilter("Lormont");
// };

// const handleFilterClickEysines = () => {
//     setFilter("Eysines");
// };

// // cette variable est re-créée à chaque fois
// // que le state filter est modifié
// // et elle contient les coworkings filtrés
// // en fonction de la valeut du state filter (donc de la ville sélectionnée)
//     const filteredCoworkings = coworkings.filter((coworking) => {
//         return coworking.address === filter;
//     });

//     return (
//         <section>
//             <h2>Liste des coworkings</h2>

//             <button onClick={handleFilterClickBordeaux}>Bordeaux</button>
//             <button onClick={handleFilterClickMerignac}>Mérignac</button>
//             <button onClick={handleFilterClickLormont}>Lormont</button>
//             <button onClick={handleFilterClickEysines}>Eysines</button>



//             {filteredCoworkings.map((coworking) => {
//                 return (
//                     <article key={coworking.id}>
//                         <h3>{coworking.name}</h3>
//                         <p>{coworking.address}</p>
//                         <p>{coworking.phone}</p>
//                         <img src={coworking.img} alt={coworking.name} />
//                     </article>
//                 );
//             })}
//         </section>
//     );
// };



// export default ListCoworkings;


///////////////////

import { useState } from "react";

const ListCoworkings = () => {
    const coworkings = [
        {
            id: 1,
            name: "Coworking 1",
            address: "Bordeaux",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Coworking 2",
            address: "Merignac",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 3,
            name: "Coworking 3",
            address: "Bordeaux",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 4,
            name: "Coworking 4",
            address: "Eysines",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
        {
            id: 5,
            name: "Coworking 5",
            address: "Lormont",
            phone: "123456789",
            img: "https://picsum.photos/200/300",
        },
    ];

    const [city, setCity] = useState("Bordeaux");

    const handleClick = (value) => {
        setCity(value);
    };

    const coworkingsFiltered = coworkings.filter((coworking) => {
        if (city === null) {
            return true;
        }

        return coworking.address === city;
    });

    return (
        <section>
            <h2>Liste des coworkings</h2>

            <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
            <button onClick={() => handleClick("Merignac")}>Mérignac</button>
            <button onClick={() => handleClick("Lormont")}>Lormont</button>
            <button onClick={() => handleClick("Eysines")}>Eysines</button>

            <button onClick={() => handleClick(null)}>Tous</button>

            {coworkingsFiltered.map((coworking) => {
                return (
                    <article key={coworking.id}>
                        <h3>{coworking.name}</h3>
                        <p>{coworking.address}</p>
                        <p>{coworking.phone}</p>
                        <img src={coworking.img} alt={coworking.name} />
                    </article>
                );
            })}
        </section>
    );
};

export default ListCoworkings;