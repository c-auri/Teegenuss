export function modulo(n, m) {
    let r = n % m

    if (r < 0) {
        r = m > 0 ? r + m : r - m
    }
    
    return r === -0 ? 0 : r
}