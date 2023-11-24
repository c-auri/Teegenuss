import { useState } from 'react'
import type { CollectionEntry } from 'astro:content'
import { initializeContact, ContactStep } from './Contact'
import { initializeAddress, AddressStep } from './Address'
import Overview from './Overview'

type Props = {
    pack: CollectionEntry<'packs'>,
}

export default function Order({ pack }: Props) {
    const [ current, setCurrent ] = useState("address")
    const [ contact, setContact ] = useState(initializeContact())
    const [ address, setAddress ] = useState(initializeAddress())

    return <>
        <div className="flex flex-col gap-5">

            <section className="max-w-lg py-5 px-3 rounded-md bg-gray-100 text-lg text-gray-600">

                <h1 className="py-2 font-bold text-2xl text-gray-700">
                    Bestellübersicht
                </h1>

                <p className="flex justify-between">
                    <span>{pack.data.title}</span>
                    <span>{pack.data.price},00&thinsp;€</span>
                </p>
                <p className="flex justify-between">
                    <span>Versand (Deutschland)</span>
                    <span>3,00&thinsp;€</span>
                </p>

                <div className="my-1 w-full h-px bg-gray-600"></div>

                <p className="flex justify-between">
                    <span>Gesamt</span>
                    <span>{pack.data.price + 3},00&thinsp;€</span>
                </p>

                <p className="text-right text-sm text-gray-500">
                    ggf. zzgl. Auslandsversandkosten
                </p>

            </section>

            <section className="max-w-lg mb-10">

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

            </section>

        </div>
    </>
}