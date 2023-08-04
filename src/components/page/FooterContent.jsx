import { useState } from "react"

export default function FooterContent() {
    const [current, setCurrent] = useState(null)
    const toggleContact = () => current === "contact" ? setCurrent(null) : setCurrent("contact")
    const togglePrivacy = () => current === "privacy" ? setCurrent(null) : setCurrent("privacy")

    return <>
            <div class="pb-24 border-b-2 border-gray-900">
                { current === "contact" && Contact() }
            </div>
            <div class="select-none my-8 lg:my-14 flex justify-between text-gray-800 text-sm md:text-md lg:text-lg">
                <span>Copyright &copy; Christoph Aurich</span>
                <span class="flex gap-4">
                    {Control("Kontakt", toggleContact)}
                    {Control("Datenschutz", togglePrivacy)}
                </span>
            </div>
        </>
}

function Control(label, toggleContent) {
    return <span onClick={toggleContent}>{label}</span>
}

function Contact() {
    return <>
        <form class="grid gap-4 md:gap-8 lg:gap-16 lg:grid-cols-[1fr,1fr] xl:grid-cols-[2fr,3fr]">
            <div class="text-xl lg:text-2xl">
                <p class="lg:my-3">
                    Fragen oder Anregungen?
                </p>
                <p class="lg:my-3">
                    Schreib mir gerne eine Nachricht und ich komme auf dich zurück.
                </p>
            </div>
            <fieldset class="grid gap-5">
                <p class="grid gap-1">
                    <label for="name">Name</label>
                    <input class="border border-gray-800 focus:outline-none focus:border-gray-600 p-2 rounded-md bg-gray-900 text-gray-300" type="text" id="name" name="name" title="Bitte gib deinen Namen ein." />
                </p>
                <p class="grid gap-1">
                    <label for="email">Email</label>
                    <input class="border border-gray-800 focus:outline-none focus:border-gray-600 p-2 rounded-md bg-gray-900 text-gray-300" type="email" id="email" name="email" title="Bitte gib deine Email-Adresse ein." />
                </p>
                <p class="flex flex-col gap-1 md:col-span-2">
                    <label for="message">Nachricht</label>
                    <textarea class="my-1 border border-gray-800 focus:outline-none focus:border-gray-600 p-2 rounded-md bg-gray-900 text-gray-300" id="message" name="message" rows="10" title="Bitte gib deine Nachricht ein."></textarea>
                </p>
                <button class="mb-8 py-2 px-16 border border-gray-900 md:justify-self-start hover:border-gray-500 focus:outline-none focus:border-gray-500 rounded-md hover:text-gray-300">Absenden</button>
            </fieldset>
        </form>
    </>
}