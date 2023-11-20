import type { Contact } from "./ContactForm"

type Props = {
    contact: Contact,
}

export default function Overview({
    contact
}: Props) {
    return <>
        <section>
            <h2>Übersicht</h2>
            <h3>Kontakt</h3>
            <p>{contact.email}</p>
            <p>{contact.discord}</p>
            <p>{contact.source}</p>
        </section>
    </>
}