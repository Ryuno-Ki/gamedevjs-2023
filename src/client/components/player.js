import { openmojis } from '../../vendor/openmoji.js'

/** @typedef {import('../state/initial').Player} Player */

/**
 * Build the data structure for svg that displays a player on the field.
 *
 * @param {Player} player
 * @param {number} index
 * @returns {Array<*>}
 */
export function buildPlayer (player, index) {
  const humanEmojiData = openmojis.find((emoji) => emoji.hexcode === '1F9D2')
  const humanEmoji = humanEmojiData ? humanEmojiData.emoji : ''
  const robotEmojiData = openmojis.find((emoji) => emoji.hexcode === '1F916')
  const robotEmoji = robotEmojiData ? robotEmojiData.emoji : ''

  const emoji = player.isBot ? robotEmoji : humanEmoji

  const x = index % 2 ? 70 : 0
  const y = index > 1 ? 70 : 0

  return ['text', ['player'], { 'data-index': index, x, y }, '', [
    ['tspan', ['avatar', 'emoji'], { dx: 0, dy: 10 }, emoji],
    ['tspan', ['nickname'], { dx: -10, dy: 10 }, player.name]
  ]]
}
