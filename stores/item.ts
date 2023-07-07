export const useItemStore = defineStore('item', () => {
  const item: Ref<Item|undefined> = ref()

  async function fetch(id: string) {
    const { data } = await useAsyncGql('GetCoin', { id: id })

    const itemData: any = data?.value?.coin

    if (itemData) {
      item.value = {
        id: Number(id),
        title: itemData.identifier,
        subtitle: itemData.authority,
        images: [
          {
            url: dThumbnail(itemData.image_obverse?.id, ''),
            title: 'Avers',
            description: itemData.obverse
          },
          {
            url: dThumbnail(itemData.image_reverse?.id, ''),
            title: 'Revers',
            description: itemData.reverse
          }
        ],
        dates: [itemData.date_from, itemData.date_to],
        properties: [
          [
            {
              title: 'Autorité émettrice',
              value: itemData.authority
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
            {
              title: 'Poids',
              value: itemData.weight,
              emptyDisplay: true
            },
            {
              title: 'Diamètre',
              value: itemData.diameter,
              emptyDisplay: true
            },
            {
              title: 'Axe',
              value: itemData.axis,
              emptyDisplay: true
            }
          ],
          [
            {
              title: 'Commentaire',
              value: itemData.comment
            },
            {
              title: 'Bibliographie',
              value: itemData.bibliography,
              html: true
            }
          ]
        ]
      }
    }
  }

  return { item, fetch }
})