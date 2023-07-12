
// import { useState } from "react";
// import ShowCoworking from "./ShowCoworking";

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

//     const [city, setCity] = useState("Bordeaux");

//     const handleClick = (value) => {
//         setCity(value);
//     };

//     const coworkingsFiltered = coworkings.filter((coworking) => {
//         if (city === null) {
//             return true;
//         }

//         return coworking.address === city;
//     });

//     return (
//         <section>
//             <h2>Liste des coworkings</h2>

//             <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
//             <button onClick={() => handleClick("Merignac")}>Mérignac</button>
//             <button onClick={() => handleClick("Lormont")}>Lormont</button>
//             <button onClick={() => handleClick("Eysines")}>Eysines</button>

//             <button onClick={() => handleClick(null)}>Tous</button>

//             {coworkingsFiltered.map((coworking) => {
//                 return (
//                     <ShowCoworking coworking={coworking} />
//                 );
//             })}
//         </section>
//     );
// };

// export default ListCoworkings;


/////////////////////////////



/////////

import { useState, useEffect } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
    const [coworkings, setCoworkings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCoworkings = async () => {
        if (coworkings.length === 0) {

            setTimeout(async () => {
                const coworkingsResponse = await fetch("/coworkings.json");
                const coworkingsData = await coworkingsResponse.json();
                setCoworkings(coworkingsData);
                setLoading(false);
            }, 1500);
        }
    };

    useEffect(() => {
        fetchCoworkings();
    }, []);

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
            <h2>Liste des espaces de coworking</h2>

            <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
            <button onClick={() => handleClick("Merignac")}>Mérignac</button>
            <button onClick={() => handleClick("Lormont")}>Lormont</button>
            <button onClick={() => handleClick("Eysines")}>Eysines</button>

            <button onClick={() => handleClick(null)}>Tous</button>

            {loading ? (
                //
                <p>Chargement en cours...</p>
                // <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                //     <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                // </svg>
                //
            ) : coworkingsFiltered.length > 0 ? (
                coworkingsFiltered.map((coworking) => (
                    <ShowCoworking key={coworking.id} coworking={coworking} />
                ))
            ) : (
                <p>Aucun espace de coworking trouvé.</p>
            )}
        </section>
    );
};

export default ListCoworkings;
