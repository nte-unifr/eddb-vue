export const INFORMATION_TYPE_TEXT = 'text'
export const INFORMATION_TYPE_HTML = 'html'
export const INFORMATION_TYPE_DATES = 'dates'
export const INFORMATION_TYPE_DIVIDER = 'divider'
export const INFORMATION_TYPES = [INFORMATION_TYPE_TEXT, INFORMATION_TYPE_HTML, INFORMATION_TYPE_DATES, INFORMATION_TYPE_DIVIDER] as const

export const SORTER_TYPE_LETTERS = 'letters'
export const SORTER_TYPE_NUMBERS = 'numbers'
export const SORTER_TYPES = [SORTER_TYPE_LETTERS, SORTER_TYPE_NUMBERS] as const

export const FILTER_TYPE_TEXT = 'text'
export const FILTER_TYPE_MULTIDYN = 'multidyn'
export const FILTER_TYPE_RANGE = 'range'
export const FILTER_TYPES = [FILTER_TYPE_TEXT, FILTER_TYPE_MULTIDYN, FILTER_TYPE_RANGE] as const

export const FILTER_RANGE_DEFAULT_FROM = -9999
export const FILTER_RANGE_DEFAULT_TO = 9999