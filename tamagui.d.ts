import type { AppTamaguiConfig } from './tamagui.config'

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppTamaguiConfig {}
}

export {}
