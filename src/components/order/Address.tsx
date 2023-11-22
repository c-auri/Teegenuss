import Input from '../forms/Input'
import Button from '../forms/Button'

import { useState } from 'react'

export type Address = {
    name: string,
    addition: string,
    street: string,
    number: string,
    postalCode: string,
    town: string,
    country: string,
}

export function initializeAddress() {
    return {
        name: "",
        addition: "",
        street: "",
        number: "",
        postalCode: "",
        town: "",
        country: "",
    }
}

type Props = {
    initialValues: Address,
    handleSubmit: (address: Address) => void
}

export function AddressStep({initialValues, handleSubmit}: Props) {
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
            className="my-24 flex flex-col gap-6"
            onSubmit={(e) => { e.preventDefault(); handleSubmit(address)}}
        >
            <h2 className="font-bold text-lg text-gray-600">Adresse</h2>

            <Input
                type="text"
                label="Name"
                value={address.name ?? ""}
                handleChange={update("name")}
                isRequired={true}
            />

            <Input
                type="text"
                label="Adresszusatz"
                value={address.addition ?? ""}
                handleChange={update("addition")}
            />

            <Input
                type="text"
                label="Straße"
                value={address.street ?? ""}
                handleChange={update("street")}
                isRequired={true}
            />

            <Input
                type="text"
                label="Hausnummer"
                value={address.number ?? ""}
                handleChange={update("number")}
                isRequired={true}
            />

            <Input
                type="text"
                label="PLZ"
                value={address.postalCode ?? ""}
                handleChange={update("postalCode")}
                isRequired={true}
            />

            <Input
                type="text"
                label="Ort"
                value={address.town ?? ""}
                handleChange={update("town")}
                isRequired={true}
            />

            <Input
                type="text"
                label="Land"
                value={address.country ?? ""}
                handleChange={update("country")}
                isRequired={true}
                addition="Bei Versand außerhalb Deutschlands kommen zusätzliche Versandkosten hinzu."
            />

            <p className="text-sm text-gray-600">* Pflichtfeld</p>
            <Button type="submit">Weiter</Button>
        </form>
    </>
}
