import { RoleStore, RoleStoreModelType } from './../Role.model'
import { RoleType, PermissionType } from './../Role.types'
import { success } from './../../../Mock.util'
import {
  firstPageResponse,
  secondPageResponse,
  emptyPageResponse,
  badRole,
  goodRole
} from './RoleModelTest.data'
import roleApi from './../Role.api'

jest.mock('./../Role.api');

let roleStore : RoleStoreModelType = null;

describe('Test Role model', () => {
  beforeAll(() => {
    roleStore = RoleStore.create({}, { roleApi, api: roleApi })
  })

  it('should create the store successfully', () => {
    // expect(roleStore.role).toBe(undefined)
    expect(roleStore.paged.count).toBe(0)
    expect(roleStore.paged.list).toEqual([])
    expect(roleStore.paged.currentPage).toBe(0)
  })

  it('should get one role', function * () {
    success(roleApi.get, goodRole)
    yield roleStore.get(1)
    expect(roleStore.currentRole.name).toBe('Test role')
    expect(roleStore.currentRole.type).toBe(RoleType.STUDENT)
    expect(roleStore.currentRole.permissions).toEqual([PermissionType.COURSE_ENROLL, PermissionType.LEARNING_PATH_EDIT])
    roleStore.clear()
    expect(roleStore.currentRole.name).toBe('')
    expect(roleStore.currentRole.permissions).toEqual([])
  })

  it('should throw error', function * () {
    success(roleApi.get, badRole)
    yield expect(roleStore.get(1)).rejects.toThrow()
  })

  it('should get roles paged', function * () {
    expect(roleStore.paged.currentPage).toBe(0)

    success(roleApi.getPaged, firstPageResponse)
    yield roleStore.getPaged(1)
    expect(roleStore.paged.currentPage).toBe(1)
    expect(roleStore.paged.count).toBe(3)

    success(roleApi.getPaged, secondPageResponse)
    yield roleStore.getPaged(2)
    expect(roleStore.paged.currentPage).toBe(2)
    expect(roleStore.paged.count).toBe(3)

    success(roleApi.getPaged, emptyPageResponse)
    yield roleStore.getPaged(3)
    expect(roleStore.paged.currentPage).toBe(3)
    expect(roleStore.paged.count).toBe(0)
  })
})