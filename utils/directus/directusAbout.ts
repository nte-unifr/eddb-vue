import type { AboutConfig } from "@/types/index"
import type { About } from "@/types/about"

export const directusAbout = (apiUrl: string, config: AboutConfig, data: any): About => {
  const { title_criteria, slogan_criteria, description_criteria, image_criteria } = config

  return {
    title: data[title_criteria] || 'EDDB',
    ...(slogan_criteria ? { slogan: data[slogan_criteria] } : {}),
    ...(description_criteria ? { description: data[description_criteria] } : {}),
    ...(image_criteria ? { image: `${apiUrl}/assets/${data[image_criteria]}` } : {})
  }
}