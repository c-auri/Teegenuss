import { useState } from 'react'
import Input from '../forms/Input'
import Button from '../forms/Button'

export default function Order() {
    const [ state, setState ] = useState({
        current: "start",
        contact: {
            email: "",
        },
    })

    const setEmail = (email: string) => setState({ ...state, contact: {...state.contact, email: email}})

    return <>
        <section>
            <h2 className="font-bold text-lg text-gray-600">Kontakt</h2>
            <form className="my-24 lg:my-32" onSubmit={(e) => { e.preventDefault(); console.log(state.contact)}}>
                <Input type="email" label="Email" name="contact-email" value={state.contact.email} handleChange={(e) => setEmail(e.currentTarget.value)}/>
                <Button type="submit">Weiter</Button>
            </form>
        </section>
    </>
}