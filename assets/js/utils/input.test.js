import { 
  emailIsValid,
  isNullOrWhitespace,
} from './input.js'

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

const nonemptyStrings = [
  "asdf",
  "as df",
  "§  §",
  "_",
  "_ _",
  "_\t_",
  "_\n_",
  "\n_",
  "_\n",
]

const emptyStrings = [
  null,
  undefined,
  "",
  " ",
  "\t",
  "\n",
  "     ",
  " \t\n\t "
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

describe("isNullOrWhitespace is falsy for:", () => {
    test.each(nonemptyStrings)(
        "%p",
        (string) => expect(isNullOrWhitespace(string)).toBeFalsy())
})

describe("isNullOrWhitespace is truthy for:", () => {
    test.each(emptyStrings)(
        "%p",
        (string) => expect(isNullOrWhitespace(string)).toBeTruthy())
})