import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

export const tamaguiConfig = createTamagui(config)
export type AppTamaguiConfig = typeof tamaguiConfig
