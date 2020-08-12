import React, {ReactElement} from 'react'
import styled from 'styled-components'
import { ActionBox, Box, Input, LinkText, Margin } from '@ui/core';
import { yup, FormAwareScreen, resolver } from '@form';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';

type RoleFormProps = {
  type: 'create' | 'edit';
}

const DetailsBox = styled(ActionBox)`
  margin: 10px 20px 20px 20px;
  padding-left: 20px;
  background: ${({theme}) => theme.colors.clearBackground};
`

const Content = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
`

const SpacedInput = styled(Input)`
  margin-bottom: 15px;
`

const schema = yup.object().shape({
  firstName: yup.string().required(),
});

type RoleForm = {
  name: string;
  description: string;
  roleType: string;
  entityStatus: string;
}

const defaultValues : RoleForm = {
  name: '',
  description: '',
  roleType: '',
  entityStatus: ''
}

function RoleEditScreen({type} : RoleFormProps) : ReactElement {
  const onSubmit = (data : RoleForm) => {
    console.log(data);
  }

  const navigate = useNavigate()
  const formConfig = useForm<RoleForm>({ defaultValues, resolver: resolver(schema) })
  const { register } = formConfig

  console.log(formConfig.formState.isDirty)

  return (
    <FormAwareScreen defaultValues={defaultValues} onSubmit={onSubmit} config={formConfig} direction='column'>
      <Box borderRadius={20}>
        <Margin left={20} bottom={10}>
          <LinkText back onClick={() => navigate('/administration/role')}>Back to roles</LinkText>
        </Margin>
        <DetailsBox title={`Role ${type === 'edit' ? 'Edit' : 'Create'}`}>
          <Content>
            <SpacedInput label="Name" placeholder="name" name="name" ref={register} />
            <SpacedInput label="Description" placeholder="description" name="description" ref={register} />
            <SpacedInput label="Role type" placeholder="Role type" name="roleType" ref={register} />
            <SpacedInput label="Entity Status" placeholder="Entity Status" name="entityStatus" ref={register} />
          </Content>
        </DetailsBox>
      </Box>
    </FormAwareScreen>
  )
}

export default RoleEditScreen