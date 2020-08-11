import React, {ReactElement} from 'react'
import styled from 'styled-components'
import { ActionBox, Box, Input, Row } from '@ui/core';
import { yup, FormAwareScreen, resolver } from '@form';
import { useForm } from 'react-hook-form';


const UserDetailsBox = styled(ActionBox)`
  margin-bottom: 20px;
  background: ${({theme}) => theme.colors.clearBackground};
`

const Content = styled.div`
  display: flex;
  margin: 20px;
`

const EmploymentBox = styled(Box)`
  margin-bottom: 20px;
  background: ${({theme}) => theme.colors.clearBackground};
`

const schema = yup.object().shape({
  firstName: yup.string().required(),
});

type UserForm = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
}

const defaultValues : UserForm = {
  firstName: "bill",
  lastName: "luo",
  email: "bluebill1049@hotmail.com",
  city: 'Cluj'
}

function UserSaveScreen() : ReactElement {
  const onSubmit = (data : UserForm) => {
    console.log(data);
  }

  const formConfig = useForm<UserForm>({ defaultValues, resolver: resolver(schema) })
  const { register } = formConfig

  return (
    <FormAwareScreen defaultValues={defaultValues} onSubmit={onSubmit} config={formConfig} direction='column'>
      <div> back - All users</div>
      <Box borderRadius={20}>
        <UserDetailsBox title={'User\'s details'}>
          <Content>
            <Row flex={0.5}>File upload</Row>
            <Row marginRight={20}>
              <Input label="first name" placeholder="first name" name="firstName" ref={register} />
              <Input label="email" placeholder="email" name="email" ref={register} />
            </Row>
            <Row>
              <Input label="last name" placeholder="last name" name="lastName" ref={register} />
              <Input label="city" placeholder="city" name="city" ref={register} />
            </Row>
          </Content>
        </UserDetailsBox>
        <EmploymentBox>
          Departments
        </EmploymentBox>
        <EmploymentBox>
          Workgroups
        </EmploymentBox>
      </Box>
    </FormAwareScreen>
  )
}

export default UserSaveScreen