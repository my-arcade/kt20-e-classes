const pagedRole1 = {
    id: 1,
    name: 'Test role',
    description: 'some data'
}

const pagedRole2 = {
  id: 1,
  name: 'Test role',
  description: 'some data'
}

const pagedRole3 = {
  id: 1,
  name: 'Test role',
  description: 'some data'
}

const goodRole = {
  ...pagedRole1,
  type: 'STUDENT',
  permissions: ['COURSE_ENROLL', 'LEARNING_PATH_EDIT']
}

const badRole = {
  id: 1,
  name: 'Test role',
  description: 'some data',
  type: 'NOT_EXISTING'
}

const firstPageResponse = { count: 3, list: [pagedRole1, pagedRole2] }
const secondPageResponse = { count: 3, list: [pagedRole3] }

const emptyPageResponse : { count: number, list: Object[] } = { count: 0, list: [] } 

export {
  firstPageResponse,
  secondPageResponse,
  emptyPageResponse,
  badRole,
  goodRole
}