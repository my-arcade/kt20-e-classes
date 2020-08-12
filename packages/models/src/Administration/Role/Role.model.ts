import { types, Instance, flow, SnapshotIn, cast, getEnv } from 'mobx-state-tree'
import { RoleType, PermissionType } from './Role.types'
import ApiStore from './../ApiStore.model'
import { ApiState } from './../General.types'

const rolePageSize = 10

const RoleModel = types
  .model('RoleModel', {
    id: types.optional(types.number, -1),
    name: types.optional(types.string, ''),
    description: types.optional(types.string, ''),
    permissions: types.array(types.enumeration<PermissionType>(Object.values(PermissionType))),
    type: types.maybeNull(types.enumeration<RoleType>(Object.values(RoleType))),
    entityStatus: types.optional(types.string, 'ACTIVE')
  })

interface RoleModelType extends Instance<typeof RoleModel> {}

const emptyRole : SnapshotIn<RoleModelType> = {
  id: -1,
  name: '',
  description: '',
  permissions: [],
  type: null,
  entityStatus: 'ACTIVE'
}

const SimpleRole = types.model('SimpleRole', {
  id: types.number,
  name: types.optional(types.string, ''),
  description: types.maybeNull(types.string)
})

const RolePaged = types.model('RolePaged', {
  count: 0,
  list: types.array(SimpleRole),
  currentPage: 0,
  state: types.optional(types.enumeration<ApiState>(Object.values(ApiState)), ApiState.INITIAL)
})
.views(self => ({
  get loading() {
    return self.state === ApiState.INITIAL || self.state === ApiState.LOADING
  }
}))


const RoleStore = types.compose(
    ApiStore,
    types.model('RoleStore', {
      roles: types.array(RolePaged),
      currentRole: types.optional(RoleModel, {}),
      paged: types.optional(RolePaged, {}),
    })
  )
  .named('RoleStore')
  .views(self => ({
    get api() {
      const { roleApi } = getEnv(self)
      return roleApi
    }
  }))
  .actions(self => ({
    get: flow(function * (id: number) {
      yield self.fetch({
        fetcher: roleApi => roleApi.get(id),
        onSuccess: ({ data }) => {
          self.currentRole = data
        }
      })
    }),
    clear: () => {
      self.currentRole = cast(emptyRole)
    },
    getPaged: flow(function * (page: number) {
      yield self.fetch({
        fetcher: roleApi => roleApi.getPaged({ page, size: rolePageSize }),
        onStateChange: state => self.paged.state = state,
        onSuccess: ({ data }) => {
          self.paged =  { ...data, currentPage: page }
        }
      })
    }),
   create: flow(function * (payload) {
     yield self.fetch({
       fetcher: roleApi => roleApi.create(payload)
     })
   }),
   edit: flow(function * (id, payload) {
    yield self.fetch({
      fetcher: roleApi => roleApi.edit(id, payload)
    })
   }),
   deleteByIds: flow(function * (ids: Array<number>) {
      yield self.fetch({
        fetcher: roleApi => roleApi.deleteByIds(ids)
      })
   })
  }))

interface RoleStoreModelType extends Instance<typeof RoleStore> {}

export {
  RoleModel,
  RoleModelType,
  RoleStore,
  RoleStoreModelType
}