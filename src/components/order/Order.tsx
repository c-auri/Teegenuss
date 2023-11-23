import { useState } from 'react'
import { initializeContact, ContactStep } from './Contact'
import { initializeAddress, AddressStep } from './Address'
import Overview from './Overview'

export default function Order() {
    const [ current, setCurrent ] = useState("address")
    const [ contact, setContact ] = useState(initializeContact())
    const [ address, setAddress ] = useState(initializeAddress())

    return <>
        <div className="max-w-lg">

            <AddressStep
                isVisible={current === 'address'}
                initialValues={address}
                handleSubmit={setAddress}
                goPrev={() => setCurrent("address")}
                goNext={() => setCurrent("contact")}
            />

            <ContactStep
                isVisible={current === 'contact'}
                initialValues={contact}
                handleSubmit={setContact}
                goPrev={() => setCurrent("address")}
                goNext={() => setCurrent("overview")}
            />

            <Overview
                isVisible={current === 'overview'}
                contact={contact}
                address={address}
                goPrev={() => setCurrent("contact")}
            />

        </div>
    </>
}