import { useState } from 'react'
import { initializeContact, ContactStep } from './Contact'
import Overview from './Overview'

export default function Order() {
    const [ contact, setContact ] = useState(initializeContact())

    return <>
        <ContactStep initialValues={contact} handleSubmit={contact => setContact(contact)}/>

        <Overview contact={contact}/>
    </>
}