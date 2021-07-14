import mineflayer from 'mineflayer'
import pvp from 'mineflayer-pvp'
import { readdir } from 'fs/promises'
import vec from 'vec3'
import { pathfinder } from 'mineflayer-pathfinder'
const { createBot } = mineflayer

const bot = createBot({
  port: 64200,
  host: 'localhost', // https://webclient.prismarine.js.org/
  username: 'mollerbot',
  mainHand: 'left',
  viewDistance: 'far'
})

bot.loadPlugins([
  // @ts-ignore
  pvp.plugin,
  pathfinder
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
