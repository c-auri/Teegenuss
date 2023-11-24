import Button from '../forms/Button'

type Props = {
    handleBack: () => void,
    isSubmit?: boolean,
}

export function Controls({ handleBack, isSubmit = false }: Props) {
    return <>
        <p className="w-full flex flex-col gap-1">
            <Button type="submit">{isSubmit ? "Bestellen" : "Weiter"}</Button>
            <Button type="button" style="secondary" handleClick={handleBack}>Zurück</Button>
        </p>
    </>
}