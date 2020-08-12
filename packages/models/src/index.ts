import { types, Instance } from 'mobx-state-tree'
import { Login } from './Administration/Authentication/Authentication.model'
import { RoleStore } from './Administration/Role/Role.model'
import authenticationApi from './Administration/Authentication/Authentication.api'
import roleApi from './Administration/Role/Role.api'
import { ApiState } from './Administration/General.types'

const Store = types.model('Store', {
  loginStore: types.optional(Login, {}),
  roleStore: types.optional(RoleStore, {})
})

const store : StoreModelType = Store.create({
}, {
  authenticationApi,
  roleApi
})

interface StoreModelType extends Instance<typeof Store> {}

export {
  store,
  ApiState
}