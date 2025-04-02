import type { AppRoutesType } from '@/shared/const/router'
import type { AppRoutesProps } from '@/shared/types'
import { AboutPage } from '@/pages/AboutPage'

import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AppRoutes, RoutePath } from '@/shared/const'

export const routeConfig: Record<AppRoutesType, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
