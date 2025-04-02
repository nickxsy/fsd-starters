import type { Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import type { NavigateOptions, To } from 'react-router'
import type { StateSchema, ThunkExtraArg } from './StateSchema'
import { $api, rtkApi } from '@/shared/api'
import { configureStore } from '@reduxjs/toolkit'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    ...asyncReducers,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(
    rootReducer as ReducersMapObject<StateSchema>,
  )

  const extraArgs: ThunkExtraArg = {
    api: $api,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArgs,
        },
      }).concat(rtkApi.middleware),
  })

  store.reducerManager = reducerManager

  return store
}

// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
