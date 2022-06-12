export function scrollTo(element, options = { }) {
    element.scrollIntoView({
        "behavior": options.behavior ?? "smooth",
        "block": options.block ?? "start",
        "inline": options.block ?? "start",
    })
}

export function isVisible(element) {
    return !isHidden(element)
}

export function isHidden(element) {
    return element.getAttribute("data-display") === "none"
}

export function show(...elements) {
    for (const element of elements) {
        if (isHidden(element)) {
            element.removeAttribute("data-display")
        }
    }
}

export function hide(...elements) {
    for (const element of elements) {
        element.setAttribute("data-display", "none")
    }
}

export function toggleVisibility(...elements) {
    for (const element of elements) {
        if (isVisible(element)) {
            hide(element)
        } else {
            show(element)
        }
    }
}

export function isExpanded(element) {
    return element.getAttribute("data-expanded") === "true"
}

export function isCollapsed(element) {
    return element.getAttribute("data-expanded") === "false"
}

export function expand(...elements) {
    for (const element of elements) {
        element.setAttribute("data-expanded", "true")
    }
}

export function collapse(...elements) {
    for (const element of elements) {
        element.setAttribute("data-expanded", "false")
    }
}

export function hideOverflow(element) {
    element.setAttribute("data-overflow", "hidden")
}

export function showOverflow(element) {
    element.removeAttribute("data-overflow")
}