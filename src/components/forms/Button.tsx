import type { PropsWithChildren } from "react"

interface Props {
    type: "button" | "submit" | "link",
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void
    href?: string,
}

export default function Button({
    type,
    handleClick,
    href,
    children
}: PropsWithChildren<Props>) {
    if (type === 'link') {
        return  <>
            <a
                href={href}
                className="cursor-pointer py-1 px-5 rounded-md text-lg bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
            >
                {children}
            </a>
        </>
    } else {
        return <>
            <button
                type={type}
                onClick={handleClick}
                className="cursor-pointer py-1 px-5 rounded-md text-lg bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
            >
                {children}
            </button>
        </>
    }
}