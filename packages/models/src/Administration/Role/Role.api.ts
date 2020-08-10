import axios, { AxiosResponse } from 'axios'
import { RoleResponse, RoleRequest, RolePagedResponse } from './Role.types'
import { NamedEntityResponse, PagedResponse } from './../General.types'

function getAll() : Promise<AxiosResponse<Array<NamedEntityResponse>>> {
  return axios.get('/v3/administration/role')
}

function create(payload: RoleRequest) : Promise<AxiosResponse<RoleResponse>> {
  return axios.post('/v3/administration/role', payload)
}

function deleteByIds(itemsIds: Array<number>) : Promise<AxiosResponse<void>> {
  return axios.post('/v3/administration/role/delete', itemsIds)
}

function getPaged({page, size} = {page: 0, size: 10}) : Promise<AxiosResponse<PagedResponse<RolePagedResponse>>> {
  return axios.get('/v3/administration/role/paged', {
    params: {
      'pagination.page': page,
      'pagination.size': size
    }
  })
}

function getTypes() : Promise<AxiosResponse<Array<string>>> {
  return axios.get('/v3/administration/role/type')
}

function get(roleId: number) : Promise<AxiosResponse<RoleResponse>> {
  return axios.get(`/v3/administration/role/${roleId}`)
}

function edit(roleId: number, payload: RoleRequest) : Promise<AxiosResponse<RoleResponse>> {
  return axios.put(`/v3/administration/role/${roleId}`, payload)
}

export default {
  getAll,
  create,
  deleteByIds,
  getPaged,
  getTypes,
  get,
  edit
}
