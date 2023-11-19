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

    const setContact = (property: keyof Contact) => {
        return (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const newContact = {...state.contact}
            newContact[property] = e.currentTarget.value
            setState({...state, contact: newContact})
        }
    }

    return <>
        <ContactForm values={state.contact} update={setContact}/>
    </>
}