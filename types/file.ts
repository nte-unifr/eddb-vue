export const FILE_TYPE_PDF = 'PDF'
export const FILE_TYPE_IMG = 'IMG'
const FILE_TYPES = [FILE_TYPE_PDF, FILE_TYPE_IMG] as const

export interface File {
  type: typeof FILE_TYPES[number]
  title: string
  link?: string
}