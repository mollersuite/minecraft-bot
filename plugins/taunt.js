/**
 * @fileoverview Taunts
 *
 * When moller bot kills a player, taunt them in chat.
 */

/** @type {<Type>(arr: Type[]) => Type} */
const random = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default (/** @type {import('mineflayer').Bot} */ bot) =>
  bot.on('message', (msg) => {
    if (msg?.with[0] && msg?.with[1]?.text === bot.username) {
      const victim = msg.with[0].text
      if (!victim) return
      bot.chat(
        random([
          'ez',
          'get owned',
          'you are shit',
          'GET GOOD GET LMAOBOX',
          'log off',
          'stay mad',
          'https://youtu.be/RVw_c2-Xr9Y', // impact install tutorial
          `${bot.username} winning`,
          `${bot.username} on top`
        ])
      )
    }
  })
