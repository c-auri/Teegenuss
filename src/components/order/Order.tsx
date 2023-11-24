import { useState } from 'react'
import type { CollectionEntry } from 'astro:content'
import { initializeContact, ContactStep, Contact } from './Contact'
import { initializeAddress, AddressStep, Address } from './Address'
import Overview from './Overview'

type Props = {
    pack: CollectionEntry<'packs'>,
}

export default function Order({ pack }: Props) {
    const [ current, setCurrent ] = useState("address")
    const [ contact, setContact ] = useState(initializeContact())
    const [ address, setAddress ] = useState(initializeAddress())

    return <>
        <div className="flex flex-col items-center gap-5 lg:mb-10 lg:flex-row lg:gap-0 lg:items-stretch lg:rounded-xl lg:bg-white lg:shadow-sm">

            <section className="max-w-2xl w-screen p-3 rounded-md bg-gray-100 text-lg text-gray-600 lg:min-w-fit lg:w-1/3 lg:rounded-none lg:rounded-l-xl lg:p-8 lg:pr-12">

                <h1 className="pb-2 font-bold text-2xl text-gray-700">
                    Bestellung
                </h1>

                <p className="flex justify-between gap-8">
                    <span>{pack.data.title}</span>
                    <span>{pack.data.price},00&thinsp;€</span>
                </p>
                <p className="flex justify-between gap-8">
                    <span>Versand (Deutschland)</span>
                    <span>3,00&thinsp;€</span>
                </p>

                <div className="my-1 w-full h-px bg-gray-600"></div>

                <p className="flex justify-between gap-8">
                    <span>Gesamt</span>
                    <span>{pack.data.price + 3},00&thinsp;€</span>
                </p>

                <p className="text-right text-sm text-gray-500">
                    ggf. zzgl. Auslandsversandkosten
                </p>

            </section>

            <section className="max-w-2xl w-screen mb-10 border-gray-100 lg:rounded-r-xl lg:py-8 lg:px-12">

                <AddressStep
                    isVisible={current === 'address'}
                    initialValues={address}
                    handleBack={() => {
                        setAddress(address)
                        setCurrent("address")
                    }}
                    handleNext={(address: Address) => {
                        setAddress(address)
                        setCurrent("contact")
                    }}
                />

                <ContactStep
                    isVisible={current === 'contact'}
                    initialValues={contact}
                    handleBack={() => {
                        setContact(contact)
                        setCurrent("address")
                    }}
                    handleNext={(contact: Contact) => {
                        setContact(contact)
                        setCurrent("overview")
                    }}
                />

                <Overview
                    isVisible={current === 'overview'}
                    contact={contact}
                    address={address}
                    handleBack={() => setCurrent("contact")}
                />

            </section>

        </div>
    </>
}