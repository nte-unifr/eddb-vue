export const sanitizeAndSort = (list: string[]) => {
  list = Array.from(new Set(list.filter(item => item !== null)))
  sortAlpha(list)
  return list
}

export const sortAlpha = (list: string[]) => {
  list.sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
}