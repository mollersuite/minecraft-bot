export default (/** @type {import('mineflayer').Bot} */ bot) =>
  bot.on('message', (msg) => console.log(msg.toAnsi()))
