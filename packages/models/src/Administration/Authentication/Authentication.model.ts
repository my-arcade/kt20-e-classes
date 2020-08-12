import { types, Instance, flow, getEnv } from 'mobx-state-tree'

enum AuthenticationState {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
}

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
    state: types.optional(types.enumeration<AuthenticationState>(Object.values(AuthenticationState)), AuthenticationState.INITIAL),
    user: types.optional(AuthenticatedUser, {})
  })
  .views(self => ({
    get api() {
      const { authenticationApi } = getEnv(self)
      return authenticationApi
    },
    get authenticated() {
      return self.state === AuthenticationState.AUTHENTICATED
    },
    get loading() {
      return self.state === AuthenticationState.LOADING
    },
    get triedAuthentication() {
      return self.state !== AuthenticationState.INITIAL
    }
  }))
  .actions(self => ({
    login: flow(function * (payload : {email: string}) {
      const { api } = self
      self.state = AuthenticationState.LOADING
      try {
        yield api.login(payload)
        self.state = AuthenticationState.AUTHENTICATED
        self.user = yield self.user.getCurrent();
      } catch(err) {
        self.state = AuthenticationState.NOT_AUTHENTICATED
        if(!err.response || err.response.status !== 401) {
          throw new Error(err);
        }
      }
    }),

    provisionAuthentication: flow(function * () {
      const { api: userApi } = self
      try {
        self.state = AuthenticationState.LOADING
        yield userApi.provisionAuthentication()
        self.state = AuthenticationState.AUTHENTICATED
        self.user = yield self.user.getCurrent();
      } catch(err) {
        self.state = AuthenticationState.NOT_AUTHENTICATED
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