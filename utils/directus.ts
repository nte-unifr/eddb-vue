import type { ItemConfig, ImageConfig, InformationConfig } from "@/types/index"
import { INFORMATION_TYPE_DATES, INFORMATION_TYPE_DIVIDER, INFORMATION_TYPE_HTML, INFORMATION_TYPE_TEXT } from "@/types/constants"
import type { Item, ItemImage, ItemInformation } from "@/types/item"

export const dThumbnail = (id: string, preset?: string): string => {
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

export const dCollectionFields = (): string => {
  const itemConfig = useAppConfig().collection.item

  const flatValues = [
    itemConfig.id_criteria,
    itemConfig.title_criteria,
    itemConfig.subtitle_criteria,
    ...(itemConfig.images || []).map(image => image.criteria).filter(Boolean),
    ...(itemConfig.dates || []).map(date => date.criteria).filter(Boolean),
    ...(itemConfig.informations || []).map(information => information.criteria?.[0]).filter(Boolean)
  ]
  return flatValues.join(',')
}

export function dBuildItem(itemConfig: ItemConfig, apiItem: any): Item {
  return {
    id: apiItem[itemConfig.id_criteria],
    title: apiItem[itemConfig.title_criteria] || 'Indéfinie',
    ...(itemConfig.subtitle_criteria ? { subtitle: apiItem[itemConfig.subtitle_criteria] } : {}),
    ...(itemConfig.dates ? { dates: formatDateRange(apiItem[itemConfig.dates[0].criteria], apiItem[itemConfig.dates[1].criteria]) } : {}),
    ...(itemConfig.images ? { images: itemConfig.images.map(imageConfig => dProcessImages(imageConfig, apiItem)) } : {}),
    ...(itemConfig.informations ? { informations: itemConfig.informations
      .map(informationConfig => dProcessInformations(informationConfig, apiItem))
      .filter(info => info.content !== '')
    } : {})
  }
}

export function dProcessImages(imageConfig: ImageConfig, apiItem: any): ItemImage {
  const { criteria, title, description_criteria } = imageConfig

  return {
    id: apiItem[criteria],
    ...(title ? { title } : {}),
    ...(description_criteria ? { description: apiItem[description_criteria] } : {})
  }
}

export function dProcessInformations(informationConfig: InformationConfig, apiItem: any): ItemInformation {
  let { type = INFORMATION_TYPE_TEXT, title = '', criteria = [], emptyDisplay = false, suffix = '' } = informationConfig
  let content = emptyDisplay ? 'Indéfinie' : ''

  if (criteria.length || type === INFORMATION_TYPE_DIVIDER) {
    switch (type) {
      case INFORMATION_TYPE_DIVIDER:
        content = 'divider'
        break

      case INFORMATION_TYPE_TEXT:
        let valueText = apiItem[criteria[0]] || ''
        content = valueText !== '' ? valueText + suffix : content
        break

      case INFORMATION_TYPE_HTML:
        let valueHtml = criteria.map(crit => apiItem[crit] || '').join('')
        valueHtml.trim()
        content = valueHtml !== '' ? valueHtml : content
        break

      case INFORMATION_TYPE_DATES:
        content = formatDateRange(apiItem[criteria[0]], apiItem[criteria[1]]) || ''
        break
    }
  }

  return { type, title, content }
}