import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl';

const Dashboard : FC<{}> = () => {
  return (
    <div>
      Dashboard 
      <br />
      <FormattedMessage
        defaultMessage="Greetings, {name}"
        description="Standard greeting"
        values={{name: 'Ionut'}}
      />
    </div>
  )
}


export default Dashboard
