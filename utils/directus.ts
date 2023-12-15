export const dThumbnail = (id: string, preset?: string) => {
  const config = useRuntimeConfig()
  switch (preset) {
    case 'collection-thumb':
      return `${config.public.baseURL}/assets/${id}/?fit=cover&width=160&height=160`
    case 'item-image':
      return `${config.public.baseURL}/assets/${id}/?fit=cover&width=512`
    default:
      return `${config.public.baseURL}/assets/${id}/`
  }
}