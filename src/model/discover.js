import { get } from '@utils/http'

const getBanner = params => {
  return get('/banner', params)
}

export { getBanner }
