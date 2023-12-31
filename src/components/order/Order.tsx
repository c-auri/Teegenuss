import type { CollectionEntry } from 'astro:content'
import { useState } from 'react'
import { initializeContact, ContactStep, Contact } from './Contact'
import { initializeAddress, AddressStep, Address } from './Address'
import { TermsStep } from './Terms'
import { AnnotationStep } from './Annotation'
import { Overview } from './Overview'

type Props = {
  pack: CollectionEntry<'packs'>,
}

export default function Order({ pack }: Props) {
  const [ current, setCurrent ] = useState("terms")
  const [ address, setAddress ] = useState(initializeAddress())
  const [ contact, setContact ] = useState(initializeContact())
  const [ annotation, setAnnotation ] = useState("")

  return <>
    <div className="py-12 flex flex-col items-center gap-5 md:bg-white md:rounded-xl md:shadow-md  md:min-h-[44rem] lg:min-h-[42rem] lg:py-4 lg:mb-10 lg:flex-row lg:gap-0 lg:items-stretch">

      <section className="max-w-2xl w-full text-lg text-slate-600 lg:min-w-fit lg:w-1/3 lg:py-6">
        <div className="h-full w-full lg:px-12 lg:py-4 lg:border-r lg:border-slate-200">
          <div className={`${current === "overview" ? "block" : "hidden lg:block"}`}>
            <Overview pack={pack} address={address} contact={contact} annotation={annotation} />
          </div>
        </div>
      </section>

      <section className="max-w-2xl w-full lg:py-10 lg:px-12">

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
            setCurrent("annotation")
          }}
        />

        <AnnotationStep
          isVisible={current === 'annotation'}
          initialValue={annotation}
          handleBack={() => setCurrent("contact")}
          handleNext={(annotation: string) => {
            setAnnotation(annotation)
            setCurrent("overview")
          }}
        />

      </section>

    </div>
  </>
}