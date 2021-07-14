import mineflayer from 'mineflayer'
import vec from 'vec3'
import { readdir } from 'fs/promises'
const { createBot } = mineflayer

const bot = createBot({
  port: 64200,
  host: 'localhost', // https://webclient.prismarine.js.org/
  username: 'mollerbot',
  mainHand: 'left',
  viewDistance: 'far'
})

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
