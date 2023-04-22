export { checkForWin } from './check-for-win.js'
export { selectEmoji } from './select-emoji.js'
export { setIsBot } from './set-is-bot.js'
export { setNickname } from './set-nickname.js'
export { switchToScene } from './switch-to-scene.js'
export { tick } from './tick.js'

/** @typedef {import('./check-for-win').Action} CheckForWinAction */
/** @typedef {import('./select-emoji').Action} SelectEmojiAction */
/** @typedef {import('./set-is-bot').Action} SetIsBotAction */
/** @typedef {import('./set-nickname').Action} SetNicknameAction */
/** @typedef {import('./switch-to-scene').Action} SwitchToSceneAction */
/** @typedef {import('./tick').Action} TickAction */
/** @typedef {CheckForWinAction | SelectEmojiAction | SetIsBotAction | SetNicknameAction | SwitchToSceneAction | TickAction} Action */
