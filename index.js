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

function no_fall_damage() {
  if (bot.entity.velocity.y < -0.5) {
    bot._client.write('position', {
      x: bot.entity.position.x,
      y: bot.entity.position.y,
      z: bot.entity.position.z,
      yaw: bot.entity.yaw,
      pitch: bot.entity.pitch,
      onGround: true
    })
  }
}

bot.on('move', no_fall_damage)
bot.on('spawn', async () => {
  await bot.waitForChunksToLoad()
})
bot.on('message', (msg) => {
  console.log(msg.toAnsi())
})
