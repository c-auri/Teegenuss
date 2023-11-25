import { Controls } from './Controls'

type Props = {
    isVisible: boolean,
    handleBack: () => void,
    handleNext: () => void,
}

export function TermsStep({isVisible, handleBack, handleNext}: Props) {
    return <>
        <form
            className={(isVisible ? "block" : "hidden") + " h-full flex flex-col"}
            onSubmit={(e) => {
                e.preventDefault()
                handleNext()
            }}
        >
            <h2 className="pb-3 font-bold text-2xl text-gray-600">Teilnahmebedingungen</h2>

            <div className="mb-8 flex-1">
                <ol className="list-decimal text-gray-800 flex flex-col justify-start gap-3">
                    <li>Ich bin kein gewerblich eingetragener Händler und habe <span className="font-bold">keine Gewinnabsicht</span>.  Es handelt sich hier um einen freundschaftlichen Austausch, deshalb ist es mir auch wichtig jeden Teilnehmer zuordnen zu können.</li>
                    <li>Die Bezahlung ist nur per <span className="font-bold">Vorkasse</span> möglich. Der Bezahlvorgang ist nicht automatisiert. Nachdem ihr die Bestellung aufgegeben habt, melde ich mich zeitnah bei euch um die Bezahlung und weitere Details direkt auszumachen. Ich bevorzuge Bezahlung per <span className="font-bold">PayPal</span>, eine Banküberweisung ist aber auch möglich.</li>
                    <li>Das Paket wird aus Kostengründen <span className="font-bold">unversichtert und ohne Sendungsverfolgung mit der Briefpost</span> verschickt. Bisher ist dabei noch nie etwas schief gegangen, ihr tragt dabei als Empfänger aber das Risiko. Wer sicher gehen möchte kann sich gegen Aufpreis für eine andere Versandoption entscheiden.</li>
                    <li>Ein <span className="font-bold">Versand ins Ausland</span> ist <span className="font-bold">gegen Aufpreis</span> möglich. Die Anpassung des Preises geschieht jedoch nicht automatisch, sondern ich teile euch die Optionen dann im Direktkontakt mit. Erfahrungsgemäß ist es aber deutlich teurer und lohnt sich meist nur für größere Bestellungen.</li>
                </ol>
            </div>


            <Controls handleBack={handleBack} textBack={"Abbrechen"} textNext={"Akzeptieren"} />

        </form>
    </>
}
