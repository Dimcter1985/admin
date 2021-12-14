import { APP_AUTH_STORAGE_KEY } from 'consts'

function getAuthData(): IProfile | null {
  const rawData = window.localStorage.getItem(APP_AUTH_STORAGE_KEY)
  return rawData ? JSON.parse(rawData) : null
}

export default getAuthData
