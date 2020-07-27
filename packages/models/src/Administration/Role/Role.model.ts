import { types, Instance } from 'mobx-state-tree'

const Role = types
  .model('Role', {
    name: '',
    description: '',
    type: '',
    permissions: types.array(types.string),
    entityStatus: ''
  })

interface RoleModel extends Instance<typeof Role> {}

export {
  Role,
  RoleModel
}