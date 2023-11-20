interface Props {
    type: string,
    name: string,
    label: string,
    value: string,
    handleChange?: (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    isRequired?: boolean,
    size?: number
}

export default function Input({
    type,
    name,
    label,
    value,
    handleChange,
    isRequired = false,
    size
}: Props) {
    return <>
        <label className={(size ? "" : "flex-1 ") + "flex flex-col"}>
            <span className="pl-1 text-gray-600 text-md">{label}{isRequired && " *"}</span>
            {
                type === "textarea"
                ? <textarea
                    className={"px-2 py-1 border rounded-md text-lg text-gray-800 focus:outline-none focus:border-gray-600"}
                    name={name}
                    rows={size}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                />
                : <input
                    className={"px-2 py-1 border rounded-md text-lg text-gray-800 focus:outline-none focus:border-gray-600"}
                    type={type}
                    name={name}
                    size={size}
                    value={value}
                    onChange={handleChange}
                    required={isRequired}
                />
            }
        </label>
    </>
}