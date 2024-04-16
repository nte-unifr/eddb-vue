export const formatDateRange = (start: any, end: any): string => {
  if (start === end) {
    return formatBCADDate(start) || 'Indéfinie'
  }

  const formattedStart = formatBCADDate(start)
  const formattedEnd = formatBCADDate(end)

  if (formattedStart && formattedEnd) {
    return `${formattedStart} – ${formattedEnd}`
  } else if (formattedStart || formattedEnd) {
    return formattedStart || formattedEnd || 'Indéfinie'
  }
  return 'Indéfinie'
}

function formatBCADDate(year: any) {
  if (typeof year !== "number") {
    return null
  }
  if (year < 0) {
    return `${Math.abs(year)} av. J.-C.`
  }
  return `${year} apr. J.-C.`
}