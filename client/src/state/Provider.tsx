import { PropsWithChildren, useReducer } from 'react'

import { INITIAL_STATE, reducer } from './reducer'
import AppContext from './context'

const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export default AppProvider
