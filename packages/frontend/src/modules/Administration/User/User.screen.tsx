import React, {ReactElement} from 'react'

type RoleScreenProps = {

}

const config = [
  { key: 'info', name: 'Basic info', sortable: true, transformer: (item : { [key: string]: any }, loading: boolean) => loading ? <Skeleton /> : (<div>{item.name}</div>) },
  { key: 'job', name: 'Job' },
  { key: 'department', name: 'Department' },
  { key: 'edit', name: 'edit', transformer: () => <Edit size={20} /> }
]


function RoleScreen({} : RoleScreenProps) : ReactElement {
  return (
    <div>
      <div>Role screen</div>
      <div>hello</div>
    </div>
  )
}

export default RoleScreen