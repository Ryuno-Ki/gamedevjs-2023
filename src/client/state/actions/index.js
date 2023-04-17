export { setIsBot } from './set-is-bot.js'
export { setNickname } from './set-nickname.js'
export { switchToScene } from './switch-to-scene.js'
export { tick } from './tick.js'

/** @typedef {import('./set-is-bot.js').Action} SetIsBotAction */
/** @typedef {import('./set-nickname.js').Action} SetNicknameAction */
/** @typedef {import('./switch-to-scene').Action} SwitchToSceneAction */
/** @typedef {import('./tick').Action} TickAction */
/** @typedef {SetIsBotAction | SetNicknameAction | SwitchToSceneAction | TickAction} Action */
