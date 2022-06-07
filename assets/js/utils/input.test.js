import { emailIsValid } from './input.js'

const validEmails = [
  "dev@tg.test",
  "name.surname@domain.de",
  "name-surname@domain.com",
]

const invalidEmails = [
    "just.a.name",
    "@",
    "name@notld",
    "@noname.com",
    ".name@domain.com",
    "name@double@domain.com",
]

describe("emailIsValid is truthy for:", () => {
    test.each(validEmails)(
        "%p",
        (email) => expect(emailIsValid(email)).toBeTruthy())
})

describe("emailIsValid is falsy for:", () => {
    test.each(invalidEmails)(
        "%p",
        (email) => expect(emailIsValid(email)).toBeFalsy())
})