import type { PropsWithChildren } from "react"

interface Props {
    type: "button" | "submit" | "link",
    style?: "primary" | "secondary",
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void
    href?: string,
}

export default function Button({
    type,
    style = "primary",
    handleClick,
    href,
    children
}: PropsWithChildren<Props>) {
    if (type === 'link') {
        return  <>
            <a
                href={href}
                className=
                {
                    "cursor-pointer py-1 px-5 border-2 rounded-md text-lg hover:bg-gray-200 hover:text-gray-600 hover:border-gray-200 "
                    + (style === "primary" ? " border-gray-100 bg-gray-100 text-gray-600" : " bg-white border-gray-100 text-gray-600")
                }
            >
                {children}
            </a>
        </>
    } else {
        return <>
            <button
                type={type}
                onClick={handleClick}
                className=
                {
                    "cursor-pointer py-1 px-5 border-2 rounded-md text-lg hover:bg-gray-200 hover:text-gray-600 hover:border-gray-200 "
                    + (style === "primary" ? " border-gray-100 bg-gray-100 text-gray-600" : " bg-white border-gray-100 text-gray-600")
                }
            >
                {children}
            </button>
        </>
    }
}