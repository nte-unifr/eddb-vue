import { storeToRefs } from 'pinia'

export const useCollectionStore = defineStore('collection', () => {
  const sorterStore = useSorterStore()
  const pagerStore = usePagerStore()
  const filterStore = useFilterStore()

  const { sort } = storeToRefs(sorterStore)
  const { page } = storeToRefs(pagerStore)
  const { filter } = storeToRefs(filterStore)

  const items: Ref<Item[]> = ref([])
  const total = ref(1)

  watch(
    [() => sort.value, () => page.value, () => filter.value],
    () => {
      fetch()
    }
  )

  async function fetch() {
    const { data } = await useAsyncGql('GetCoins', {
      limit: pagerStore.limit,
      page: pagerStore.page,
      sort: sorterStore.sort,
      filter: filterStore.filter
    })
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    pagerStore.total = data?.value?.total?.length || 0

    items.value = data?.value?.coins.map((itemData: any) => {
      return {
        id: itemData.id,
        title: itemData.identifier,
        subtitle: itemData.authority,
        images: [
          {
            url: {
              thumb: dThumbnail(itemData.image_obverse?.id, 'thumb')
            },
            title: 'Avers'
          },
          {
            url: {
              thumb: dThumbnail(itemData.image_reverse?.id, 'thumb')
            },
            title: 'Revers'
          }
        ],
        dates: [itemData.date_from, itemData.date_to],
        tags: [
          {
            title: 'Portrait',
            value: itemData.portrait
          },
          {
            title: 'Atelier',
            value: itemData.mint
          },
          {
            title: 'Métal',
            value: itemData.material
          },
          {
            title: 'Dénomination',
            value: itemData.denomination
          },
        ]
      }
    })
  }

  return { items, total, fetch }
})