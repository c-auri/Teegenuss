import type { CollectionEntry } from 'astro:content'
import { useState } from 'react'
import { initializeContact, ContactStep, Contact } from './Contact'
import { initializeAddress, AddressStep, Address } from './Address'
import { TermsStep } from './Terms'
import Overview from './Overview'

type Props = {
  pack: CollectionEntry<'packs'>,
}

export default function Order({ pack }: Props) {
  const [ current, setCurrent ] = useState("terms")
  const [ contact, setContact ] = useState(initializeContact())
  const [ address, setAddress ] = useState(initializeAddress())

  return <>
    <div className="flex flex-col items-center gap-5 lg:min-h-[40rem] lg:bg-white lg:mb-10 lg:flex-row lg:gap-0 lg:items-stretch lg:rounded-xl lg:shadow-md">

      <section className="max-w-2xl w-screen text-lg text-slate-600 lg:min-w-fit lg:w-1/3 lg:py-6">

        <div className="h-full w-full lg:px-12 lg:py-4 lg:border-r lg:border-slate-200">

          <h1 className="pb-6 font-bold text-2xl text-slate-600">
            Paketauswahl
          </h1>

          <p className="pt-1 flex justify-between gap-8">
            <span>{pack.data.title}</span>
            <span>{pack.data.price},00&thinsp;€</span>
          </p>

          <p className="pb-1 flex justify-between gap-8">
            <span>Versand (Deutschland)</span>
            <span>3,00&thinsp;€</span>
          </p>

          <div className="my-1 w-full h-px bg-slate-300"></div>

          <p className="py-1 flex justify-between gap-8">
            <span>Gesamt</span>
            <span>{pack.data.price + 3},00&thinsp;€</span>
          </p>

          <p className="text-right py-1 text-sm text-slate-400">
            ggf. zzgl. Auslandsversandkosten
          </p>

        </div>

      </section>

      <section className="max-w-2xl w-screen mb-10 border-gray-100 lg:pt-10 lg:px-12">

        <TermsStep
          isVisible={current === 'terms'}
          handleBack={() => window.location.href = "/"}
          handleNext={() => setCurrent('address')}
        />

        <AddressStep
          isVisible={current === 'address'}
          initialValues={address}
          handleBack={() => {
            setAddress(address)
            setCurrent("terms")
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