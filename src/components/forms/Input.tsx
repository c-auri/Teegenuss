interface Props {
    type: string,
    name?: string,
    label?: string,
    value?: string,
    handleChange?: (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    additions?: string[],
    isRequired?: boolean,
    size?: number
}

export default function Input({
    type,
    name,
    label,
    value,
    handleChange,
    additions,
    isRequired = false,
    size
}: Props) {
    return <>
        <label className={(size ? "" : "flex-1 ") + "flex flex-col"}>
            <span className="pl-1 text-gray-600 text-md">{label}{isRequired && " *"}</span>
            {
                type === "textarea"
                ? <textarea
                    className={"peer px-2 py-1 border rounded-md text-lg text-gray-800 focus:outline-none focus:border-gray-600"}
                    name={name}
                    rows={size}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                />
                : <input
                    className={"peer px-2 py-1 border rounded-md text-lg text-gray-800 focus:outline-none focus:border-gray-600"}
                    type={type}
                    name={name}
                    size={size}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                />
            }
            {
                additions &&
                additions.map(addition =>
                    <span className="text-sm text-transparent text-right peer-focus:text-gray-500">
                        {addition}
                    </span>)
            }
        </label>
    </>
}