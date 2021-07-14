import mineflayer from 'mineflayer'
import vec from 'vec3'

const { createBot } = mineflayer

const bot = createBot({
  port: 64200,
  host: 'localhost', // https://webclient.prismarine.js.org/
  username: 'mollerbot',
  mainHand: 'left',
  viewDistance: 'far'
})

function jesus() {
  if (['water', 'lava'].includes(bot.blockAt(bot.entity.position)?.name)) {
    bot.physics.gravity = -0.08
    bot.entity.position.add(vec('0', '1', '0'))
  } else bot.physics.gravity = 0.08
}

bot.on('move', jesus)
bot.on('spawn', async () => {
  await bot.waitForChunksToLoad()
})
bot.on('message', (msg) => {
  console.log(msg.toAnsi())
})
