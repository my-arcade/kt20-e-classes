import React, { FC } from 'react'
import DashboardOverview from './components/DashboardOverview.component';
import DashboardAssessments from './components/DashboardAssesments.component';
import DashboardCourses from './components/DashboardCourses.component';
import DashboardLearningPaths from './components/DashboardLearningPaths.component';

import { Row, Screen, Margin } from '@ui/core'

const Dashboard : FC<{}> = () => {
  return (
    <Screen>
      <Row flex={0.6} marginRight={20}>
        <Margin bottom={20}>
          <DashboardOverview loading />
        </Margin>
        <DashboardCourses loading />
      </Row>
      <Row flex={0.4} marginRight={20}>
        <Margin bottom={20}>
          <DashboardAssessments loading />
        </Margin>
        <DashboardLearningPaths loading />
      </Row>
    </Screen>
  )
}


export default Dashboard
