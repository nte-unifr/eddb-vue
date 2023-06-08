import { useCoinsStore } from './coins'

export const useFiltersStore = defineStore('filters', () => {
  const status = 'pending'
  const coinsStore = useCoinsStore()

  interface FilterTypes {
    [key: string]: string[];
  }

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

    return inactiveItems
  })

  const authorityCondition = createCondition('authority')
  const mintCondition = createCondition('mint')
  const materialCondition = createCondition('material')
  const portraitCondition = createCondition('portrait')

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

  function createCondition<T extends keyof ListItem>(key: T) {
    return computed(() => {
      if (activeList[key].length > 0) {
        return {
          [key]: {
            _in: activeList[key],
          },
        };
      } else {
        return {
          "_or": [
            {
              [key]: {
                _in: list[key],
              },
            },
            {
              [key]: {
                _null: true,
              },
            },
          ],
        };
      }
    });
  }  

  return {
    fetch, list, activeList, inactiveList, setActive, removeActive, reset, filterQuery, status
  }
})
