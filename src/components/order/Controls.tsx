import Button from '../forms/Button'

type Props = {
    handleBack: () => void,
    textBack?: string,
    textNext?: string,
}

export function Controls({ handleBack, textBack = "Zurück", textNext = "Weiter" }: Props) {
    return <>
        <p className="w-full flex flex-col gap-1 lg:flex-row-reverse lg:justify-end lg:gap-4">
            <Button type="submit">{textNext}</Button>
            <Button type="button" handleClick={handleBack}>{textBack}</Button>
        </p>
    </>
}