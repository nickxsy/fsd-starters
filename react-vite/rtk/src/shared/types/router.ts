import type { RouteProps } from 'react-router'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}
