import { Input } from '../forms/Input'
import { useState } from 'react'
import { Controls } from './Controls'

export type Address = {
  name: string,
  annotation: string,
  street: string,
  number: string,
  postalCode: string,
  town: string,
  country: string,
}

export function initializeAddress() {
  return {
    name: "",
    annotation: "",
    street: "",
    number: "",
    postalCode: "",
    town: "",
    country: "",
  }
}

type Props = {
  initialValues: Address,
  handleBack: () => void,
  handleNext: (address: Address) => void,
}

const formId = "address-form"

export function AddressStep({initialValues, handleBack, handleNext}: Props) {
  const [address, setAddress] = useState(initialValues)

  const update = (property: keyof Address) => {
    return (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const newAddress = {...address}
      newAddress[property] = e.currentTarget.value
      setAddress(newAddress)
    }
  }

  return <>
    <form
      id={formId}
      className={"flex-1 flex flex-col"}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext(address)
      }}
    >
      <h2 className="pb-6 font-bold text-2xl text-gray-600">Adresse</h2>

      <div className="flex-1">
        <div className="flex flex-col justify-start gap-3">

          <Input
            type="text"
            label="Vor- und Nachname"
            value={address.name ?? ""}
            handleChange={update("name")}
            isRequired={true}
          />

          <Input
            type="text"
            label="Adresszusatz"
            value={address.annotation ?? ""}
            handleChange={update("annotation")}
          />

          <p className="flex gap-5">

            <Input
              type="text"
              label="Straße"
              value={address.street ?? ""}
              handleChange={update("street")}
              isRequired={true}
            />

            <Input
              type="text"
              label="Hausnr."
              value={address.number ?? ""}
              handleChange={update("number")}
              isRequired={true}
              size={1}
            />

          </p>

          <p className="flex gap-5">

            <Input
              type="text"
              label="PLZ"
              value={address.postalCode ?? ""}
              handleChange={update("postalCode")}
              isRequired={true}
              size={5}
            />

            <Input
              type="text"
              label="Ort"
              value={address.town ?? ""}
              handleChange={update("town")}
              isRequired={true}
            />

          </p>

          <Input
            type="text"
            label="Land"
            value={address.country ?? ""}
            handleChange={update("country")}
            isRequired={true}
            explanation="Versand ins Ausland erhöht die Versandkosten."
          />

        </div>
      </div>


      <p className="flex-1 pt-2 pb-5 text-sm text-gray-600">* notwendige Angabe</p>

      <Controls formId={formId} handleBack={handleBack} />

    </form>
  </>
}
