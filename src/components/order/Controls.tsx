import Button from '../forms/Button'

type Props = {
    handleBack: () => void,
    isSubmit?: boolean,
}

export function Controls({ handleBack, isSubmit = false }: Props) {
    return <>
        <p className="w-full flex flex-col-reverse gap-1">
            <Button type="button" handleClick={handleBack}>Zurück</Button>
            <Button type="submit">{isSubmit ? "Bestellen" : "Weiter"}</Button>
        </p>
    </>
}