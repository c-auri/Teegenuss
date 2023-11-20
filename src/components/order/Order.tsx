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

    const updateContact = (newContact: Contact) => {
        setState({...state, contact: newContact})
        console.log(newContact)
    }

    return <>
        <ContactForm initialValues={state.contact} handleSubmit={updateContact}/>
    </>
}