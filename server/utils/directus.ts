import { createDirectus, rest } from '@directus/sdk'
import type { DirectusClient, RestClient } from '@directus/sdk'

let _directus : DirectusClient<any> & RestClient<any>

export const useDirectus = () => {
  if (!_directus) {
    _directus = createDirectus('https://eddb.unifr.ch/nafo-admin').with(rest())
  }
  return _directus
}