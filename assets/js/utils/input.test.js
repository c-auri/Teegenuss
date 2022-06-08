import { 
    emailIsValid,
    isValidUsername,
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
    "name@nodotcom",
    "@noname.com",
    ".name@domain.com",
    "name@double@domain.com",
]

const validUsernames = [
    "Tee",
    "Teetrinker",
    "Teetrinker:in",
    "Tee Trinker",
    "Tee-Trinker",
    "Tee.trinker",
    "Tee- und Weintrinker",
    "Ein T. Trinker",
    "TEE_TRINKER",
    "Tee 12g",
    "NämöMitÜmlautß",
    "NameWith20Characters",
]

const invalidUsernames = [
    "",
    "   ",
    "___",
    "---",
    "Te",
    "Kaffeetrinker.",
    "Kaffee--trinker",
    "Kaffee- -Trinker",
    "Kaffeetrinker*in",
    ".kaffeetrinker",
    "kaffee._-trinker",
    "Kaffee-.trinker",
    "Kafee._Trinker",
    "Kaffee _Trinker",
    "Kaffee_ Trinker",
    "Kaffee?",
    "Kaffee!",
    "12g Kaffee",
    "Kaffee: 12g",
    "Kaffee$trinker",
    "Kaffee^trinker",
    "aNameWith21Characters",
    "aNameWithWellOver20Characters",
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

describe("Expect emailIsValid", () => {
  describe("to be truthy for:", () => {
      test.each(validEmails)(
          "%p",
          (email) => expect(emailIsValid(email)).toBeTruthy())
  })
  
  describe("to be falsy for:", () => {
      test.each(invalidEmails)(
          "%p",
          (email) => expect(emailIsValid(email)).toBeFalsy())
  })
})

describe("Expect isValidUsername", () => {
  describe("to be true for:", () => {
    test.each(validUsernames)(
        "%p",
        (name) => expect(isValidUsername(name)).toBe(true))
  })
  
  describe("to be false for:", () => {
    test.each(invalidUsernames)(
        "%p",
        (name) => expect(isValidUsername(name)).toBe(false))
  })
})

describe("Expect isNullOrWhitespace", () => {
  describe("to be falsy for:", () => {
      test.each(nonemptyStrings)(
          "%p",
          (string) => expect(isNullOrWhitespace(string)).toBeFalsy())
  })
  
  describe("to be isNullOrWhitespace to be truthy for:", () => {
      test.each(emptyStrings)(
          "%p",
          (string) => expect(isNullOrWhitespace(string)).toBeTruthy())
  })
})