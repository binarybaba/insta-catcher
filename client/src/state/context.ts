import { createContext } from 'react'
import { Context } from './types'
import { INITIAL_STATE } from './reducer'

const AppContext = createContext<Context>({
  state: INITIAL_STATE,
  dispatch: () => {},
})

export default AppContext
