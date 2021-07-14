import mineflayer from 'mineflayer'
import vec from 'vec3'
const { createBot } = mineflayer

const bot = createBot({
  port: 10000,
  host: '95.111.249.143', // https://webclient.prismarine.js.org/
  username: 'mollerbot',
  mainHand: 'left',
  viewDistance: 'far'
})

function jesus() {
  if (
    bot.blockAt(bot.entity.position.minus(vec('0', '1', '0'))).name == 'water'
  ) {
    bot.physics.gravity = 0
  } else bot.physics.gravity = 0.08
}

bot.on('move', jesus)
bot.on('spawn', async () => {
  await bot.waitForChunksToLoad()
  bot.chat('Hello, this is a test!')
})
