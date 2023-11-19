import Input from '../forms/Input'
import Button from '../forms/Button'

export type Contact = {
    email?: string,
    discord?: string,
    source?: string
}

type Props = {
    values: Contact,
    update: (property: keyof Contact) => (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export function ContactForm({values, update}: Props) {
    return <>
        <section>
            <h2 className="font-bold text-lg text-gray-600">Kontakt</h2>
            <form
                className="my-24 flex flex-col gap-6"
                onSubmit={(e) => { e.preventDefault(); console.log(values)}}
            >
                <Input type="email" label="Email" name="contact-email" value={values.email ?? ""} handleChange={update("email")}/>
                <Input type="text" label="Discord" name="contact-discord" value={values.discord ?? ""} handleChange={update("discord")}/>
                <Input type="text" label="Woher kennen wir uns?" name="contact-source" value={values.source ?? ""} handleChange={update("source")}/>
                <Button type="submit">Weiter</Button>
            </form>
        </section>
    </>
}
