import React, { memo } from 'react'

import WorksDisplayWrapper from './style'
import PageStar from '@/components/pageStar'


const WorkDisplay = memo(() => {
  return (  
    <WorksDisplayWrapper>
        <PageStar/>
    </WorksDisplayWrapper>
  )
})

export default WorkDisplay