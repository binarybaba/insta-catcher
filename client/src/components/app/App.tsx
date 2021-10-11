import React from 'react'

import Interaction from 'src/components/interaction/Interaction'
import Preview from 'src/components/preview/Preview'
import AppProvider from 'src/state/app/Provider'
import { AppWrapper } from './Wrapper'
export const App = () => {
  return (
    <AppProvider>
      <AppWrapper>
        <Preview />
        <Interaction />
      </AppWrapper>
    </AppProvider>
  )
}

export default App
