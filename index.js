import mineflayer from 'mineflayer'
import { readdir } from 'fs/promises'
import vec from 'vec3'

import { pathfinder } from 'mineflayer-pathfinder'
import {plugin as pvp} from 'mineflayer-pvp'
import { plugin as collectBlock } from 'mineflayer-collectblock'
import armorManager from 'mineflayer-armor-manager'

const bot = mineflayer.createBot({
  port: 64200, // 10000
  host: 'localhost', // 95.111.249.143
  username: 'mollerbot',
  mainHand: 'left',
  viewDistance: 'far'
})

bot.loadPlugins([
  // @ts-ignore
  pvp,
  // @ts-ignore
  collectBlock,
  pathfinder,
  armorManager
])


readdir('plugins').then((plugins) =>
  Promise.all(
    plugins
      .map((plugin) => `./plugins/${plugin}`)
      .map(async (plugin) => (await import(plugin)).default)
  ).then(bot.loadPlugins.bind(bot))
)

bot.on('spawn', async () => {
  await bot.waitForChunksToLoad()
})

globalThis.bot = bot
globalThis.vec = vec
