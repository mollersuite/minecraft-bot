import mineflayer from 'mineflayer'
import data from 'minecraft-data'

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
    ['water', 'lava'].includes(
      bot.blockAt(bot.entity.position.minus(vec('0', '1', '0')))?.name
    )
  ) {
    bot.physics.gravity = 0
  } else bot.physics.gravity = 0.08
}

bot.on('move', jesus)
bot.on('spawn', async () => {
  await bot.waitForChunksToLoad()
})
bot.on('message', (msg) => {
  console.log(msg.toAnsi())
})
