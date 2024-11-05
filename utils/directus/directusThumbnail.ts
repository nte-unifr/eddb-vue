export const directusThumbnail = (id: string, preset?: string): string => {
  const config = useRuntimeConfig().public

  switch (preset) {
    case 'collection-thumb':
      return `${config.api.url}/assets/${id}/?fit=cover&width=160&height=160`
    case 'item-image':
      return `${config.api.url}/assets/${id}/?fit=cover&width=512`
    default:
      return `${config.api.url}/assets/${id}/`
  }
}