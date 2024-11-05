export const formatDateRange = (start: any, end: any, separator: string, bceLabel: string, ceLabel: string): string => {
  const formattedStart = formatBCADDate(String(start), bceLabel, ceLabel)
  const formattedEnd = formatBCADDate(String(end), bceLabel, ceLabel)

  if (formattedStart && formattedEnd) {
    if (formattedStart === formattedEnd) {
      return formattedStart || 'Indéfinie'
    } else {
      return `${formattedStart} ${separator} ${formattedEnd}`
    }
  } else if (formattedStart || formattedEnd) {
    return formattedStart || formattedEnd || 'Indéfinie'
  }
  return 'Indéfinie'
}

function formatBCADDate(year: any, bceLabel: string, ceLabel: string) {
  const typedYear = parseInt(year)
  if (isNaN(typedYear)) {
    return ''
  } else if (typedYear < 0) {
    return `${Math.abs(typedYear)} ${bceLabel}`
  } else {
    return `${typedYear} ${ceLabel}`
  }
}