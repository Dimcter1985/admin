import login from 'api/login'
import { setAuthData, getAuthData, clearAuthData } from 'utils'
import { AuthProvider } from 'react-admin'

interface IParams {
  username: string;
  email: string;
  password: string;
}

const authProvider: AuthProvider = {
  login: (params: IParams) => login(params)
    .then(setAuthData),
  logout: () => {
    clearAuthData()
    return Promise.resolve()
  },
  checkAuth: () => {
    const data = getAuthData()
    if (!data) return Promise.reject()
    return Promise.resolve()
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkError: (error: any) => (
    error && error.status === 401 ? Promise.reject() : Promise.resolve()
  ),
  getPermissions: () => {
    const data = getAuthData()
    return data ? Promise.resolve(data) : Promise.reject()
  },
}

export default authProvider
