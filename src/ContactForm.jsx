import { useState } from "react";

const ContactForm = () => {
    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleSubmitContact = (event) => {
        event.preventDefault();

        setContactData({
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            message: event.target.message.value,
        });
    };

    return (
        <div>
            <h2>Contactez moi</h2>
            <form onSubmit={handleSubmitContact}>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" name="firstName" />

                <label htmlFor="lastName">Nom</label>
                <input type="text" id="lastName" name="lastName" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
                <button type="submit">Envoyer</button>
            </form>
            <p>
                Merci de m'avoir contacté:&nbsp;
                {contactData.firstName} {contactData.lastName}
            </p>
        </div>
    );
};

export default ContactForm;