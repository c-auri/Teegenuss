// https://stackoverflow.com/a/46181
export const emailIsValid = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

// https://stackoverflow.com/a/10232792
export const isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null;
}

export const areAllEmptyOrSpaces = (...strings) => {
    for (const str of strings) {
        if (!isEmptyOrSpaces(str)) {
            return false
        }
    }

    return true
}

export function escapeHtml(content) {
    return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");        
 }