export function modulo(n: number, m: number) {
    let r = n % m

    if (r < 0) {
        r = m > 0 ? r + m : r - m
    }
    
    return Math.abs(r)
}