import { types, Instance, flow, getEnv } from 'mobx-state-tree'


const AuthenticatedUser = types
  .model('AuthenticatedUser', {
    id: types.optional(types.number, -1),
    name: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    currentOrganizationId: types.optional(types.number, -1)
  })
  .views(self => ({
    get api() {
      const { authenticationApi } = getEnv(self)
      return authenticationApi
    }
  }))
  .actions(self => ({
    getCurrent: flow(function * () {
      const { api } = self
      const { data } = yield api.getCurrent();

      return data;
    })
  }))

const Login = types
  .model('Login', {
    authenticated: types.boolean,
    user: types.optional(AuthenticatedUser, {})
  })
  .views(self => ({
    get api() {
      const { authenticationApi } = getEnv(self)
      return authenticationApi
    }
  }))
  .actions(self => ({
    login: flow(function * (payload : {email: string}) {
      const { api } = self
      yield api.login(payload)
      self.authenticated = true
      self.user = yield self.user.getCurrent();
    }),

    provisionAuthentication: flow(function * () {
      const { api: userApi } = self
      try {
        yield userApi.provisionAuthentication()
        self.authenticated = true
        self.user = yield self.user.getCurrent();
      } catch(err) {
        self.authenticated = false
        if(!err.response || err.response.status !== 401) {
          throw new Error(err);
        }
      }
    })
  }))

interface AuthenticatedUserModelType extends Instance<typeof AuthenticatedUser> {}
interface LoginModelType extends Instance<typeof Login> {}

export {
  Login,
  LoginModelType,
  AuthenticatedUserModelType
}