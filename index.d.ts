// @ts-ignore
import { Bot } from 'mineflayer'
import { CollectBlock } from 'mineflayer-collectblock'
declare module 'mineflayer' {
  export interface Bot {
    vehicle?: Bot['entity']
    pvp: {
      attack(entity: Bot['entity'])
      stop()
      target?: Bot['entity']
    }
    collectBlock: CollectBlock
  }
}
