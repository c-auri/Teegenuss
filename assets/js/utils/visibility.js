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