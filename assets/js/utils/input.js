export const InputErrorCodes = {
    USERNAME_EMPTY: 'USERNAME_EMPTY',
    USERNAME_TOO_SHORT: 'USERNAME_TOO_SHORT',
    USERNAME_TOO_LONG: 'USERNAME_TOO_LONG',
    USERNAME_ILLEGAL: 'USERNAME_ILLEGAL',
    INVALID_EMAIL: 'INVALID_EMAIL',
    WEAK_PASSWORD: 'WEAK_PASSWORD',
    PASSWORD_MISMATCH: 'PASSWORD_MISMATCH',
}

export function validateName(name) {
    if (isNullOrWhitespace(name)) {
        return { code: InputErrorCodes.USERNAME_EMPTY }
    }

    if (isTooShort(name)) {
        return { code: InputErrorCodes.USERNAME_TOO_SHORT }
    }

    if (isTooLong(name)) {
        return { code: InputErrorCodes.USERNAME_TOO_LONG }
    }

    if (!isValidUsername(name)) {
        return { code: InputErrorCodes.USERNAME_ILLEGAL }
    }
}

export function isValidUsername(name) {
    // start with a letter (including umlauts)
    // follow with letters and numbers
    // optionally seperated by
        // a single underscore (_) or colon (:)
        // OR a single dot (.) or dash (-), optionally followed by whitespace
        // OR just whitespace
    const regex = /^[a-zA-Z\u00C0-\u017F]+((_|:|([.-]?\s?))?[a-zA-Z0-9\u00C0-\u017F]+)*$/
    return regex.test(name) 
        && !isTooShort(name)
        && !isTooLong(name)
}

function isTooShort(name) {
    return name.length < 3
}

function isTooLong(name) {
    return name.length > 20
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
export function emailIsValid(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

// https://stackoverflow.com/a/10232792
export function isNullOrWhitespace(str) {
    return str === null 
        || str === undefined
        || str.match(/^\s*$/) !== null;
}

export function areAllNullOrWhitespace(...strings) {
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