import { APP_AUTH_STORAGE_KEY } from 'consts'

function setAuthData(user: IProfile): void {
  window.localStorage.setItem(APP_AUTH_STORAGE_KEY, JSON.stringify(user))
}

export default setAuthData
