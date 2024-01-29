interface About {
  slogan: string
  description: string
  image: string
}

export function useFetchAbout() {

  const defaultTransform = (data: any): About => {
    const apiAbout = data.data

    return {
      slogan: apiAbout.slogan || '',
      description: apiAbout.description || '',
      image: apiAbout.image || ''
    }
  }

  const path = `/items/about`

  return useFetchDefault(path, {
    transform: defaultTransform
  })
}
