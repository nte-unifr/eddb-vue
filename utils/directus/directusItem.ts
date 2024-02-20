import type { ItemConfig, ImageConfig, InformationConfig } from "@/types/index"
import type { Item, ItemImage, ItemInformation } from "@/types/item"
import { INFORMATION_TYPE_DATES, INFORMATION_TYPE_DIVIDER, INFORMATION_TYPE_HTML, INFORMATION_TYPE_TEXT } from "@/types/constants"


export const directusItem = (itemConfig: ItemConfig, apiItem: any): Item => {
  const { id_criteria, title_criteria, subtitle_criteria, dates, images, informations } = itemConfig

  return {
    id: apiItem[id_criteria],
    title: apiItem[title_criteria] || 'Indéfinie',
    ...(subtitle_criteria ? { subtitle: apiItem[subtitle_criteria] } : {}),
    ...(dates ? { dates: formatDateRange(apiItem[dates[0].criteria], apiItem[dates[1].criteria]) } : {}),
    ...(images ? { images: images.map(imageConfig => processImages(imageConfig, apiItem)) } : {}),
    ...(informations ? { informations: informations
      .map(informationConfig => processInformations(informationConfig, apiItem))
      .filter(info => info.content !== '')
    } : {})
  }
}

function processImages(imageConfig: ImageConfig, apiItem: any): ItemImage {
  const { criteria, title, description_criteria } = imageConfig

  return {
    id: apiItem[criteria],
    ...(title ? { title } : {}),
    ...(description_criteria ? { description: apiItem[description_criteria] } : {})
  }
}

function processInformations(informationConfig: InformationConfig, apiItem: any): ItemInformation {
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