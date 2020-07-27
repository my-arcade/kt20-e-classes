import { types, Instance, flow, getEnv } from 'mobx-state-tree'


const User = types
  .model('User', {
    id: types.optional(types.number, -1),
    name: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    currentOrganizationId: types.optional(types.number, -1)
  })
  .actions(self => ({
    getCurrent: flow(function * () {
      const { userApi } = getEnv(self)
      const { data } = yield userApi.getCurrent();
      
      return data;
    })
  }))

const Login = types
  .model('Login', {
    authenticated: types.boolean,
    user: types.optional(User, {})
  })

  .actions(self => ({
    login: flow(function * (payload : {email: string}) {
      const { userApi } = getEnv(self)
      yield userApi.login(payload)
      self.authenticated = true
      self.user = yield self.user.getCurrent();
    }),

    checkAuthentication: flow(function * () {
      const { userApi } = getEnv(self)
      try {
        yield userApi.checkAuthentication()
        self.authenticated = true
        self.user = yield self.user.getCurrent();
      } catch(err) {
        self.authenticated = false
      }

      return self.authenticated
    })
  }))

interface UserModelType extends Instance<typeof User> {}

export {
  Login,
  UserModelType
}