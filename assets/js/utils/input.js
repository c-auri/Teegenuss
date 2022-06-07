export const InputErrorCodes = {
    USERNAME_EMPTY: 'USERNAME_EMPTY',
    USERNAME_TOO_SHORT: 'USERNAME_TOO_SHORT',
    USERNAME_ILLEGAL: 'USERNAME_ILLEGAL',
    INVALID_EMAIL: 'INVALID_EMAIL',
    NO_PASSWORD: 'WEAK_PASSWORD',
    PASSWORD_MISMATCH: 'PASSWORD_MISMATCH',
}

export function validateName(name) {
    if (isNullOrWhitespace(name)) {
        return { code: InputErrorCodes.USERNAME_EMPTY }
    }

    if (name.length < 3) {
        return { code: InputErrorCodes.USERNAME_TOO_SHORT }
    }

    if (!isAllowed(name)) {
        return {code: InputErrorCodes.USERNAME_ILLEGAL}
    }
}

function isAllowed(name) {
    const regex = /^[a-zA-Z0-9\u00C0-\u017F]+(.?[a-zA-Z0-9\u00C0-\u017F_ -]+)+(.?[a-zA-Z0-9\u00C0-\u017F_ -]+)+.?$/
    return regex.test(name)
}

export function validateEmail(email) {
    if (!emailIsValid(email)) {
        return { code: InputErrorCodes.INVALID_EMAIL }
    }
}

export function validatePassword(password) {
    if (password.length < 6) {
        return { code: InputErrorCodes.WEAK_PASSWORD }
    }
}

export function validateRepeat(password, repeat) {
    if (password !== repeat) {
        return { code: InputErrorCodes.PASSWORD_MISMATCH }
    }
}

// https://stackoverflow.com/a/46181
export const emailIsValid = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

// https://stackoverflow.com/a/10232792
export const isNullOrWhitespace = (str) => {
    return str === null 
        || str === undefined
        || str.match(/^\s*$/) !== null;
}

export const areAllNullOrWhitespace = (...strings) => {
    for (const str of strings) {
        if (!isNullOrWhitespace(str)) {
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