import type { Item } from "@/types/item"
import type { ItemConfig, Display } from "@/config/index"

export const directusTransform = (response: any, itemConfig: ItemConfig, display: Display): Item => {
  const { title: titleConfig, subtitle: subtitleConfig, dates: datesConfig, images: imagesConfig, informations: informationsConfig } = itemConfig

  return {
    id: response.id,
    title: processValues(response[titleConfig.apiCriteria], false, titleConfig.prefix || '', titleConfig.suffix || ''),
    subtitle: processValues(response[subtitleConfig.apiCriteria], false, subtitleConfig.prefix || '', subtitleConfig.suffix || ''),
    dates: datesConfig ? formatDateRange(
        response[datesConfig.apiCriteriaFrom],
        response[datesConfig.apiCriteriaTo],
        datesConfig.separator,
        datesConfig.bceLabel,
        datesConfig.ceLabel
      )
      : false,
    images: imagesConfig?.map(imageConfig => ({
      id: response[imageConfig.apiCriteria],
      title: imageConfig.title || '',
      caption: response[imageConfig.apiCriteriaCaption] || ''
    })),
    informations: informationsConfig.map(group =>
      group
        .filter(info => info.display.includes(display))
        .map(info => ({
          type: info.type,
          title: info.title,
          content: processValues(
            getContent(response, info.apiCriteria),
            info.showEmpty || false,
            info.prefix || '',
            info.suffix || ''
          )
        }))
        .filter(info => info.content !== '')
    )
  }
}

function getContent(response: any, apiCriteria: string | string[]): string {
  if (typeof apiCriteria === 'string') {
    return response[apiCriteria] || ''
  }
  
  return apiCriteria
    .map(criteria => response[criteria] || '')
    .filter(content => content !== '')
    .join(' ')
}

function processValues(content: string, showEmpty: boolean, prefix: string, suffix: string) {
  if (content === null || content === '') {
    return showEmpty ? 'Indéfini' : ''
  } else {
    return prefix + content + suffix
  }
}