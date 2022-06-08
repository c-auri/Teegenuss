import { mod } from './math.js'


// n, m, result
const cases = [
    // n < -m < 0
    [-6, 3, 0], [-5, 3, 1], [-4, 3, 2], 

    // -m <= n < 0
    [-3, 3, 0], [-2, 3, 1], [-1, 3, 2], 

    // n == 0
    [0, 3, 0], [0, -3, 0], 

    // 0 < n < m
    [0, 3, 0], [1, 3, 1], [2, 3, 2], [3, 3, 0],

    // 0 < m < n
    [4, 3, 1], [5, 3, 2], [6, 3, 0],

    // m <= n < 0
    [-1, -3, 2], [-2, -3, 1], [-3, -3, 0],

    // m < 0 < n
    [1, -3, 1], [2, -3, 2], [3, -3, 0]
]

describe("mod returns the euclidian remainder:", () => {
    test.each(cases)(
        "%p % %p = %p",
        (n, m, expectedResult) => {
            const actualResult = mod(n, m)
            expect(actualResult).toBe(expectedResult)
        })
})