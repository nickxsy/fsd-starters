import type { rtkApi } from '@/shared/api'
import type {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import type { AxiosInstance } from 'axios'

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: Action) => StateSchema
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
