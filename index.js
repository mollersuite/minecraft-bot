import mineflayer from 'mineflayer'
const { createBot } = mineflayer

const bot = createBot({
  port: 10000,
  host: '95.111.249.143', // https://webclient.prismarine.js.org/
  username: 'mollerbot',
  mainHand: 'left',
  viewDistance: 'far'
})

bot.on('spawn', async () => {
  await bot.waitForChunksToLoad()
  bot.chat('Hello, this is a test!')
})
