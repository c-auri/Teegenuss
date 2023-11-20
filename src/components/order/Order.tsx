import { useState } from 'react'
import { ContactForm, type Contact } from './Contact'

export default function Order() {
    const [ state, setState ] = useState({
        contact: {
            email: "",
            discord: "",
            source: "",
        },
    })

    const updateContact = (newContact: Contact) => setState({...state, contact: newContact})

    return <>
        <ContactForm initialValues={state.contact} handleSubmit={updateContact}/>

        <section>
            <h2>Übersicht</h2>
            <h3>Kontakt</h3>
            <p>{state.contact.email}</p>
            <p>{state.contact.discord}</p>
            <p>{state.contact.source}</p>
        </section>
    </>
}