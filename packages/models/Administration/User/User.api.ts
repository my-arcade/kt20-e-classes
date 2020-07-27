import axios, { AxiosResponse } from 'axios'
import { LoginResponse, PrincipalResponse } from './User.types'

class UserApi {
  login(payload : {email: string, password: string}) : Promise<AxiosResponse<LoginResponse>> {
    return axios.post('/v3/login', payload)
  }

  getCurrent() : Promise<AxiosResponse<PrincipalResponse>> {
    return axios.get('/v3/login/current')
  }

  checkAuthentication() : Promise<AxiosResponse<void>> {
    return axios.get('/v3/login/check')
  }

  logout() : Promise<AxiosResponse<void>> {
    return axios.post('/v3/login/logout')
  }
}

export default new UserApi();