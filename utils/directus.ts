export const dTranslate = (object: any, key: string) => {
  return object?.translations?.[0]?.[key] || ''
}

export const dThumbnail = (id: string, preset: string) => {
  return `https://eddb9.unifr.ch/nafo/assets/${id}/?key=${preset}`
}