// @ts-ignore
import { Bot } from 'mineflayer'

declare module 'mineflayer' {
  export interface Bot {
    vehicle?: Bot['entity']
    pvp: {
      attack(entity: Bot['entity'])
      stop()
      target?: Bot['entity']
    }
  }
}
