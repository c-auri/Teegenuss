import { useState } from 'react'
import { initializeContact, ContactStep } from './Contact'
import { initializeAddress, AddressStep } from './Address'
import Overview from './Overview'

export default function Order() {
    const [ contact, setContact ] = useState(initializeContact())
    const [ address, setAddress ] = useState(initializeAddress())

    return <>
        <ContactStep initialValues={contact} handleSubmit={contact => setContact(contact)}/>
        <AddressStep initialValues={address} handleSubmit={address => setAddress(address)}/>

        <Overview contact={contact} address={address}/>
    </>
}