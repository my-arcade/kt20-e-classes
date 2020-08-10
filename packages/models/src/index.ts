import { types, Instance } from 'mobx-state-tree'
import { Login } from './Administration/Authentication/Authentication.model'
import authenticationApi from './Administration/Authentication/Authentication.api'

const Store = types.model('Store', {
  loginStore: types.optional(Login, { authenticated: false })
})

const store : StoreModelType = Store.create({
}, {
  authenticationApi
})

interface StoreModelType extends Instance<typeof Store> {}

export {
  store
}