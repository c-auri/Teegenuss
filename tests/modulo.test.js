import { describe, test, expect } from 'vitest'
import { modulo } from '/src/scripts/modulo.js'


// divident % divisor = remainder
const zeroDivident = [
    [0, 3, 0], 
    [0, -3, 0], 
]

const allPositive = [
    [1, 3, 1],
    [2, 3, 2],
    [3, 3, 0],
    [4, 3, 1], 
    [5, 3, 2], 
    [6, 3, 0],
]

const allNegative = [
    [-1, -3, 2],
    [-2, -3, 1],
    [-3, -3, 0],
    [-4, -3, 2],
    [-5, -3, 1],
    [-6, -3, 0],
]

const positiveDividentAndNegativeDivisor = [
    [1, -3, 1],
    [2, -3, 2],
    [3, -3, 0],
    [4, -3, 1],
    [5, -3, 2],
    [6, -3, 0],
]

const negativeDividendAndPositiveDivisor = [
    [-6, 3, 0], 
    [-5, 3, 1], 
    [-4, 3, 2],
    [-3, 3, 0], 
    [-2, 3, 1], 
    [-1, 3, 2], 
]

const zeroDivisor = [
    [3, 0, NaN],
    [0, 0, NaN],
    [-3, 0, NaN]
]

const testCaseDescription = "mod(%p, %p) == %p"

describe("Expect mod(n, m)", () => {
    describe("to return the euclidian remainder", () => {
        describe("for n = 0:", () => {
            test.each(zeroDivident)(
                testCaseDescription, (n, m, r) => testModulo(n, m, r))
        })
    
        describe("for 0 < n, m:", () => {
            test.each(allPositive)(
                testCaseDescription, (n, m, r) => testModulo(n, m, r))
        })
    
        describe("for 0 > n, m:", () => {
            test.each(allNegative)(
                testCaseDescription, (n, m, r) => testModulo(n, m, r))
        })
    
        describe("for m < 0 < n:", () => {
            test.each(positiveDividentAndNegativeDivisor)(
                testCaseDescription, (n, m, r) => testModulo(n, m, r))
        })
    
        describe("for n < 0 < m:", () => {
            test.each(negativeDividendAndPositiveDivisor)(
                testCaseDescription, (n, m, r) => testModulo(n, m, r))
        })
    })

    describe("to return NaN for m = 0", () => {
        test.each(zeroDivisor)(
            testCaseDescription, (n, m, r) => testModulo(n, m, r))
    })
})

function testModulo(n, m, expectedResult) {
    const actualResult = modulo(n, m)
    expect(actualResult).toBe(expectedResult)
}