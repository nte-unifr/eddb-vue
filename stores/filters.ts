import { useCoinsStore } from './coins'

export const useFiltersStore = defineStore('filters', () => {
  const status = 'pending'
  const coinsStore = useCoinsStore()

  interface ListItem {
    authority: string[];
    portrait: string[];
    mint: string[];
    material: string[];
  }

  const list: ListItem = reactive({
    authority: [],
    portrait: [],
    mint: [],
    material: []
  })
  const activeList: ListItem = reactive({ ...list })

  const inactiveList = computed(() => {
    const inactiveItems: ListItem = {
      authority: [],
      portrait: [],
      mint: [],
      material: []
    }

    for (const key in list) {
      if (list.hasOwnProperty(key)) {
        inactiveItems[key as keyof ListItem] = list[key as keyof ListItem].filter(item => !activeList[key as keyof ListItem].includes(item))
      }
    }

    return inactiveItems;
  })

  const authorityCondition = computed(() => {
    if (activeList['authority'].length > 0) {
      return {
        'authority': {
          _in: activeList['authority']
        }
      }
    } else {
      return {
        '_or': [
          {
            'authority': {
              _in: list['authority']
            }
          },
          {
            'authority': {
              _null: true
            }
          }
        ]
      }
    }
  })

  const mintCondition = computed(() => {
    if (activeList['mint'].length > 0) {
      return {
        'mint': {
          _in: activeList['mint']
        }
      }
    } else {
      return {
        '_or': [
          {
            'mint': {
              _in: list['mint']
            }
          },
          {
            'mint': {
              _null: true
            }
          }
        ]
      }
    }
  })

  const materialCondition = computed(() => {
    if (activeList['material'].length > 0) {
      return {
        'material': {
          _in: activeList['material']
        }
      }
    } else {
      return {
        '_or': [
          {
            'material': {
              _in: list['material']
            }
          },
          {
            'material': {
              _null: true
            }
          }
        ]
      }
    }
  })

  const portraitCondition = computed(() => {
    if (activeList['portrait'].length > 0) {
      return {
        'portrait': {
          _in: activeList['portrait']
        }
      }
    } else {
      return {
        '_or': [
          {
            'portrait': {
              _in: list['portrait']
            }
          },
          {
            'portrait': {
              _null: true
            }
          }
        ]
      }
    }
  })

  const filterQuery = computed(() => ({
    _and: [
      {
        status: {
          _eq: status,
        },
      },
      authorityCondition.value,
      mintCondition.value,
      materialCondition.value,
      portraitCondition.value
    ],
  }))

  async function fetch() {
    const { data } = await useAsyncGql('GetFilters')
    const filtersData = data?.value?.filters || []

    for (const key in list) {
      if (list.hasOwnProperty(key)) {
        list[key as keyof ListItem] = processFilters(filtersData.flatMap(item => item[key as keyof typeof item] || []));
      }
    }

    coinsStore.fetchCoins()
    coinsStore.goToPage(1)
  }

  function setActive(slug: keyof ListItem, item: string) {
    if (slug in activeList && !activeList[slug].includes(item)) {
      activeList[slug].push(item)
      coinsStore.fetchCoins()
      coinsStore.goToPage(1)
    }
  }

  function removeActive(slug: keyof ListItem, item: string) {
    if (slug in activeList) {
      activeList[slug] = activeList[slug].filter(el => el !== item)
      coinsStore.fetchCoins()
      coinsStore.goToPage(1)
    }
  }

  function reset(slug: keyof ListItem) {
    activeList[slug] = []
    coinsStore.fetchCoins()
    coinsStore.goToPage(1)
  }

  return {
    fetch, list, activeList, inactiveList, setActive, removeActive, reset, filterQuery, status
  }
})
