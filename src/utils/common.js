
export function strToId(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/'/g, ' ')
        .replace(/-/g, ' ')
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '_')
}

export const lngLatJSONToString = (json) => {
    if (!json) return ''
    const lngLat = json.coordinates
    const lng = lngLat[0]
    const lat = lngLat[1]
    return `${lat}, ${lng}`
}
