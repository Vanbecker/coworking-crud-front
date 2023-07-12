
import React, { useState, useEffect } from "react";
import ShowCoworking from "./ShowCoworking";
import UpdateCoworking from "./UpdapteCoworking";

const ListCoworkings = () => {
    const [coworkings, setCoworkings] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCoworkings = async () => {
        if (coworkings.length === 0) {
            setLoading(true);
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
                <div className="spinner-container">
                    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>
                </div>
            ) : (
                coworkingsFiltered.length > 0 ? (
                    coworkingsFiltered.map((coworking) => (
                        <>
                            <ShowCoworking key={coworking.id} coworking={coworking} />
                            <UpdateCoworking coworking={coworking} />
                        </>
                    ))
                ) : (
                    <p>Aucun espace de coworking trouvé.</p>
                )
            )}
        </section>
    );
};

export default ListCoworkings;


//////

// import React, { useState, useEffect } from "react";
// import ShowCoworking from "./ShowCoworking";
// import UpdateCoworking from "./UpdateCoworking";

// const ListCoworkings = () => {
//     const [coworkings, setCoworkings] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchCoworkings = async () => {
//         if (coworkings.length === 0) {
//             setLoading(true);
//             setTimeout(async () => {
//                 const coworkingsResponse = await fetch("/coworkings.json");
//                 const coworkingsData = await coworkingsResponse.json();
//                 setCoworkings(coworkingsData);
//                 setLoading(false);
//             }, 1500);
//         }
//     };

//     useEffect(() => {
//         fetchCoworkings();
//     }, []);

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
//             <h2>Liste des espaces de coworking</h2>

//             <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
//             <button onClick={() => handleClick("Merignac")}>Mérignac</button>
//             <button onClick={() => handleClick("Lormont")}>Lormont</button>
//             <button onClick={() => handleClick("Eysines")}>Eysines</button>

//             <button onClick={() => handleClick(null)}>Tous</button>

//             {loading ? (
//                 <div className="spinner-container">
//                     <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
//                         <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
//                     </svg>
//                 </div>
//             ) : coworkingsFiltered.length > 0 ? (
//                 coworkingsFiltered.map((coworking) => (
//                     <div key={coworking.id}>
//                         <ShowCoworking coworking={coworking} />
//                         <UpdateCoworking coworking={coworking} />
//                     </div>
//                 ))
//             ) : (
//                 <p>Aucun espace de coworking trouvé.</p>
//             )}
//         </section>
//     );
// };

// export default ListCoworkings;
