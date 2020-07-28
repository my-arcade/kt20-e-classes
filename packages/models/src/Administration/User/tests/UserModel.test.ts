import { Login, LoginModelType } from './../User.model'
import { success, error } from './../../../Mock.util'
import userApi from './../User.api'

jest.mock('./../User.api');

let loginStore : LoginModelType = null;
describe('Test user/login model', () => {
  beforeAll(() => {
    loginStore = Login.create({ authenticated: false }, { userApi })
  })

  it('should create the store successfully', () => {
    expect(loginStore.authenticated).toBe(false)
  })
  
  it('should show user as authenticated', function * () {
    // prepare mock
    success(userApi.provisionAuthentication)
    success(userApi.getCurrent)

    // test
    yield loginStore.provisionAuthentication()
    expect(loginStore.authenticated).toBe(true)
  })
  
  it('should not show user as authenticated', function * () {
    // mock
    error(userApi.provisionAuthentication, {}, 401)
    // test
    yield loginStore.provisionAuthentication()
    expect(loginStore.authenticated).toBe(false)
  })

  it('should propagate error if status not 401', function * () {
    // mock
    error(userApi.provisionAuthentication, {}, 500)  // simulate server error
    // test
    yield expect(loginStore.provisionAuthentication()).rejects.toThrow();
  })
})