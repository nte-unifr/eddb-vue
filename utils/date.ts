export const formatDateRange = (start: any, end: any): string => {
  const formattedStart = formatBCADDate(String(start))
  const formattedEnd = formatBCADDate(String(end))

  if (formattedStart && formattedEnd) {
    if (formattedStart === formattedEnd) {
      return formattedStart || 'Indéfinie'
    } else {
      return `${formattedStart} – ${formattedEnd}`
    }
  } else if (formattedStart || formattedEnd) {
    return formattedStart || formattedEnd || 'Indéfinie'
  }
  return 'Indéfinie'
}

function formatBCADDate(year: any) {
  const typedYear = parseInt(year)
  if (isNaN(typedYear)) {
    return ''
  } else if (typedYear < 0) {
    return `${Math.abs(typedYear)} av. J.-C.`
  } else {
    return `${typedYear} apr. J.-C.`
  }
}