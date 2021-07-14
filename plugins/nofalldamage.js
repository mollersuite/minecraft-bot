export default (/** @type {import('mineflayer').Bot} */ bot) =>
  bot.on(
    'move',
    () =>
      bot.entity.velocity.y < -0.5 &&
      bot._client.write('position', {
        x: bot.entity.position.x,
        y: bot.entity.position.y,
        z: bot.entity.position.z,
        yaw: bot.entity.yaw,
        pitch: bot.entity.pitch,
        onGround: true
      })
  )
