import type { CollectionEntry } from 'astro:content'
import { useState } from 'react'
import { initializeContact, ContactStep, Contact } from './ContactStep'
import { initializeAddress, AddressStep, Address } from './AddressStep'
import { TermsStep } from './TermsStep'
import { initializeSelection, SelectionStep, Selection } from './SelectionStep'
import { SubmitStep } from './SubmitStep'
import { Overview } from './Overview'

type Props = {
  packs: CollectionEntry<'packs'>[]
}

export default function Order({packs}: Props) {
  const [ current, setCurrent ] = useState(0)
  const [ selection, setSelection ] = useState(initializeSelection(packs))
  const [ address, setAddress ] = useState(initializeAddress())
  const [ contact, setContact ] = useState(initializeContact())
  const [ message, setMessage ] = useState("")

  return <>
    <div className="py-8 flex flex-col items-center gap-5 md:bg-white md:pt-14 md:rounded-xl md:shadow-md md:min-h-[46rem] lg:min-h-[42rem] lg:py-4 lg:mb-10 lg:flex-row lg:gap-0 lg:items-stretch">

      <section className="max-w-2xl w-full text-lg text-slate-600 lg:min-w-fit lg:w-1/3 lg:py-6">
        <div className="hidden h-full w-full lg:block lg:px-12 lg:py-4 lg:border-r lg:border-slate-200">
          <Overview current={current} selection={selection} address={address} contact={contact} message={message} />
        </div>
      </section>

      <section className="max-w-2xl flex-1 w-full flex flex-col lg:py-10 lg:px-12">

        {
          current === 0 &&
          <TermsStep
            handleNext={() => setCurrent(1)}
          />
        }
        {
          current === 1 &&
          <SelectionStep
            initialSelection={selection}
            handleBack={(selection: Selection[]) => {
              setSelection(selection)
              setCurrent(0)
            }}
            handleNext={(selection: Selection[]) => {
              setSelection(selection)
              setCurrent(2)
            }}
          />
        }
        {
          current === 2 &&
          <AddressStep
            initialValues={address}
            handleBack={(address: Address) => {
              setAddress(address)
              setCurrent(1)
            }}
            handleNext={(address: Address) => {
              setAddress(address)
              setCurrent(3)
            }}
          />
        }
        {
          current === 3 &&
          <ContactStep
            initialValues={contact}
            handleBack={(contact: Contact) => {
              setContact(contact)
              setCurrent(2)
            }}
            handleNext={(contact: Contact) => {
              setContact(contact)
              setCurrent(4)
            }}
          />
        }
        {
          <SubmitStep
            current={current}
            isVisible={current === 4}
            selection={selection}
            address={address}
            contact={contact}
            initialMessage={message}
            handleBack={(message: string) => {
              setMessage(message)
              setCurrent(3)
            }}
          />
        }

      </section>

    </div>
  </>
}