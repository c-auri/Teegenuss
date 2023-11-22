import { useState } from 'react'
import { initializeContact, ContactForm } from './ContactForm'
import Overview from './Overview'

export default function Order() {
    const [ contact, setContact ] = useState(initializeContact())

    return <>
        <ContactForm initialValues={contact} handleSubmit={contact => setContact(contact)}/>

        <Overview contact={contact}/>
    </>
}