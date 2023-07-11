
// import React, { useState } from 'react';

// const CreateCoworking = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [address, setAddress] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log('Titre:', title);
//         console.log('Description:', description);
//         console.log('Adresse:', address);
//     };

//     return (
//         <div>
//             <h2>Créer un nouveau coworking</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="title">Titre  </label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="description">Description  </label>
//                     <textarea
//                         id="description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="address">Adresse  </label>
//                     <input
//                         type="text"
//                         id="address"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Créer</button>
//             </form>
//         </div>
//     );
// };

// export default CreateCoworking;


/////////////////////

import React, { useState } from 'react';

const CreateCoworking = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        address: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <h2>Create Coworking</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
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


////////


