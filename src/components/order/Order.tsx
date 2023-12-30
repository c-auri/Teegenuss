import type { CollectionEntry } from 'astro:content'
import { useState } from 'react'
import { initializeContact, ContactStep, Contact } from './Contact'
import { initializeAddress, AddressStep, Address } from './Address'
import { TermsStep } from './Terms'
import { FinalStep } from './Final'
import { Overview } from './Overview'

type Props = {
  pack: CollectionEntry<'packs'>,
}

export default function Order({ pack }: Props) {
  const [ current, setCurrent ] = useState("terms")
  const [ address, setAddress ] = useState(initializeAddress())
  const [ contact, setContact ] = useState(initializeContact())

  return <>
    <div className="flex flex-col items-center gap-5 lg:min-h-[40rem] lg:bg-white lg:mb-10 lg:flex-row lg:gap-0 lg:items-stretch lg:rounded-xl lg:shadow-md">

      <section className="max-w-2xl w-full text-lg text-slate-600 lg:min-w-fit lg:w-1/3 lg:py-6">
        <div className=" h-full w-full lg:px-12 lg:py-4 lg:border-r lg:border-slate-200">
          <Overview current={current} pack={pack} address={address} contact={contact} />
        </div>
      </section>

      <section className="max-w-2xl w-full mb-10 border-gray-100 lg:pt-10 lg:px-12">

        <TermsStep
          isVisible={current === 'terms'}
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

        <FinalStep
          isVisible={current === 'overview'}
          handleBack={() => setCurrent("contact")}
        />

      </section>

    </div>
  </>
}