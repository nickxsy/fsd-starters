declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import type React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

declare module '*.json' {
  const value: any
  export default value
}
