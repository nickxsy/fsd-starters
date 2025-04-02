import type { ReducersMapObject } from '@reduxjs/toolkit'
import type { StateSchema } from '../config/StateSchema'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function StoreProvider(props: StoreProviderProps) {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  )

  return <Provider store={store}>{children}</Provider>
}
