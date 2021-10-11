import React from 'react'

import Interaction from 'src/components/interaction/Interaction'
import Thumbnail from "src/components/thumbnail/Thumbnail";
import AppProvider from 'src/state/app/Provider'
function App() {
  return (
    <AppProvider>
      <Thumbnail />
      <Interaction />
    </AppProvider>
  )
}

export default App
