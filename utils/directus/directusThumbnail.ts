export const directusThumbnail = (id: string, preset?: string): string => {
  const config = useAppConfig()

  switch (preset) {
    case 'collection-thumb':
      return `${config.apiUrl}/assets/${id}/?fit=cover&width=160&height=160`
    case 'item-image':
      return `${config.apiUrl}/assets/${id}/?fit=cover&width=512`
    default:
      return `${config.apiUrl}/assets/${id}/`
  }
}