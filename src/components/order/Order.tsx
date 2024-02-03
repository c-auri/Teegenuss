import { useState } from 'react'
import { initializeContact, ContactStep, Contact } from './ContactStep'
import { initializeAddress, AddressStep, Address } from './AddressStep'
import { TermsStep } from './TermsStep'
import { SelectionStep, initializeSelection } from './SelectionStep'
import { SubmitStep } from './SubmitStep'
import { Overview } from './Overview'

export default function Order() {
  const [ current, setCurrent ] = useState("terms")
  const [ selection, setSelection ] = useState(initializeSelection())
  const [ address, setAddress ] = useState(initializeAddress())
  const [ contact, setContact ] = useState(initializeContact())
  const [ message, setMessage ] = useState("")

  return <>
    <div className="py-8 flex flex-col items-center gap-5 md:bg-white md:pt-14 md:rounded-xl md:shadow-md md:min-h-[46rem] lg:min-h-[42rem] lg:py-4 lg:mb-10 lg:flex-row lg:gap-0 lg:items-stretch">

      <section className="max-w-2xl w-full text-lg text-slate-600 lg:min-w-fit lg:w-1/3 lg:py-6">
        <div className="hidden h-full w-full lg:block lg:px-12 lg:py-4 lg:border-r lg:border-slate-200">
          <Overview selection={selection} address={address} contact={contact} message={message} />
        </div>
      </section>

      <section className="max-w-2xl flex-1 w-full flex flex-col lg:py-10 lg:px-12">

        {
          current === 'terms' &&
          <TermsStep
            handleNext={() => setCurrent('selection')}
          />
        }
        {
          current === 'selection' &&
          <SelectionStep
            initialSelection={selection}
            handleBack={() => {
              setCurrent("terms")
            }}
            handleNext={() => {
              setCurrent("address")
            }}
          />
        }
        {
          current === 'address' &&
          <AddressStep
            initialValues={address}
            handleBack={(address: Address) => {
              setAddress(address)
              setCurrent("selection")
            }}
            handleNext={(address: Address) => {
              setAddress(address)
              setCurrent("contact")
            }}
          />
        }
        {
          current === 'contact' &&
          <ContactStep
            initialValues={contact}
            handleBack={(contact: Contact) => {
              setContact(contact)
              setCurrent("address")
            }}
            handleNext={(contact: Contact) => {
              setContact(contact)
              setCurrent("overview")
            }}
          />
        }
        {
          <SubmitStep
            isVisible={current === 'overview'}
            selection={selection}
            address={address}
            contact={contact}
            initialMessage={message}
            handleBack={(message: string) => {
              setMessage(message)
              setCurrent("contact")
            }}
          />
        }

      </section>

    </div>
  </>
}