import type { AppRoutesProps } from '@/shared/types'
import { PageLoader } from '@/shared/ui'
import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router'
import { routeConfig } from '../config/routerConfig'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    )
    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
