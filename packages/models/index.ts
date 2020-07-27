import { types, Instance } from 'mobx-state-tree'
import { Login } from './Administration/User/User.model'
import userApi from './Administration/User/User.api'

const Store = types.model('Store', {
  loginStore: types.optional(Login, { authenticated: false })
})

const store : StoreModelType = Store.create({
}, {
  userApi
})

interface StoreModelType extends Instance<typeof Store> {}

export {
  store
}