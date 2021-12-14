import { APP_AUTH_STORAGE_KEY } from 'consts'

function clearAuthData(): void {
  window.localStorage.removeItem(APP_AUTH_STORAGE_KEY)
}

export default clearAuthData
