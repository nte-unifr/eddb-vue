interface About {
  slogan: string
  description: string
  image: string
}

export function useFetchAbout() {

  const defaultTransform = (data: any) => {
    const apiAbout = data.data

    const result: About = {
      slogan: apiAbout.slogan || '',
      description: apiAbout.description || '',
      image: apiAbout.image || ''
    }

    return result
  }

  const path = `/items/about`

  return useFetchDefault(path, {
    transform: defaultTransform
  })
}
