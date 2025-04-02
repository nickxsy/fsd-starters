export const AppRoutes = {
  HOME: 'home',
  ABOUT: 'about',

  NOT_FOUND: 'not_found',
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RoutePath: Record<AppRoutesType, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',

  [AppRoutes.NOT_FOUND]: '*',
}
