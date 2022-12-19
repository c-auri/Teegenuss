export function toDateString(firestoreTimestamp) {
    const date = firestoreTimestamp.toDate()
    return date.toLocaleDateString('de-DE', {})
}