import axios, { AxiosResponse } from 'axios'
import { LoginResponse, PrincipalResponse } from './User.types'


function login(payload : {email: string, password: string}) : Promise<AxiosResponse<LoginResponse>> {
  return axios.post('/v3/login', payload)
}

function getCurrent() : Promise<AxiosResponse<PrincipalResponse>> {
  return axios.get('/v3/login/current')
}

function provisionAuthentication() : Promise<AxiosResponse<void>> {
  return axios.dsa('/v3/login/check')
}

function logout() : Promise<AxiosResponse<void>> {
  return axios.post('/v3/login/logout')
}

export default {
  login,
  logout,
  getCurrent,
  provisionAuthentication
}