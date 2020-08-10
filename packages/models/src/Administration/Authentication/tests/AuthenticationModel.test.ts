import { Login, LoginModelType } from '../Authentication.model'
import { success, error } from '../../../Mock.util'
import authenticationApi from '../Authentication.api'

jest.mock('./../Authentication.api');

let loginStore : LoginModelType = null;
describe('Test user/login model', () => {
  beforeAll(() => {
    loginStore = Login.create({ authenticated: false }, { authenticationApi })
  })

  it('should create the store successfully', () => {
    expect(loginStore.authenticated).toBe(false)
  })
  
  it('should show user as authenticated', function * () {
    // prepare mock
    success(authenticationApi.provisionAuthentication)
    success(authenticationApi.getCurrent)

    // test
    yield loginStore.provisionAuthentication()
    expect(loginStore.authenticated).toBe(true)
  })
  
  it('should not show user as authenticated', function * () {
    // mock
    error(authenticationApi.provisionAuthentication, {}, 401)
    // test
    yield loginStore.provisionAuthentication()
    expect(loginStore.authenticated).toBe(false)
  })

  it('should propagate error if status not 401', function * () {
    // mock
    error(authenticationApi.provisionAuthentication, {}, 500)  // simulate server error
    // test
    yield expect(loginStore.provisionAuthentication()).rejects.toThrow();
  })
})