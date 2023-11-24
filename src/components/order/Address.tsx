import Input from '../forms/Input'
import { useState } from 'react'
import { Controls } from './Controls'

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
    isVisible: boolean,
    initialValues: Address,
    handleBack: () => void,
    handleNext: (address: Address) => void,
}

export function AddressStep({isVisible, initialValues, handleBack, handleNext}: Props) {
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
            className={(isVisible ? "flex" : "hidden") + "  flex-col gap-6"}
            onSubmit={(e) => {
                e.preventDefault()
                handleNext(address)
            }}
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
                addition="Bei Versand außerhalb Deutschlands kommen zusätzliche Versandkosten hinzu."
            />

            <Controls handleBack={handleBack} />

            <p className="text-sm text-gray-600">* Pflichtfeld</p>
        </form>
    </>
}
