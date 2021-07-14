/** @type {<Type>(arr: Type[]) => Type} */
const random = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default (/** @type {import('mineflayer').Bot} */ bot) =>
  bot.on('message', (msg) => {
    if (
      msg.getText(0) === bot.username &&
      msg.getText(1) &&
      msg.toString().includes('was slain by')
    ) {
      const killer = msg.getText(1)
      if (!killer) return
      bot.chat(random([`${killer} is hacking`]))
    }
  })
