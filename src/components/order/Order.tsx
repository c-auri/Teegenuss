import { useState } from 'react'
import { ContactForm } from './ContactForm'
import Overview from './Overview'

export default function Order() {
    const [ contact, setContact ] = useState({
            email: "",
            discord: "",
            source: "",
            addition: ""
    })

    return <>
        <ContactForm initialValues={contact} handleSubmit={contact => setContact(contact)}/>

        <Overview contact={contact}/>
    </>
}