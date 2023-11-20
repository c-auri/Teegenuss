import { useState } from 'react'
import ContactForm from './Contact'

export default function Order() {
    const [ contact, setContact ] = useState({
            email: "",
            discord: "",
            source: "",
    })

    return <>
        <ContactForm initialValues={contact} handleSubmit={contact => setContact(contact)}/>

        <section>
            <h2>Übersicht</h2>
            <h3>Kontakt</h3>
            <p>{contact.email}</p>
            <p>{contact.discord}</p>
            <p>{contact.source}</p>
        </section>
    </>
}