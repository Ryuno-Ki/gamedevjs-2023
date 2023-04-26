export { checkForGameover } from './check-for-gameover.js'
export { checkForWin } from './check-for-win.js'
export { selectEmoji } from './select-emoji.js'
export { selectWorld } from './select-world.js'
export { setIsBot } from './set-is-bot.js'
export { setNickname } from './set-nickname.js'
export { setUseOpenMoji } from './set-use-open-moji.js'
export { switchTheme } from './switch-theme.js'
export { switchToScene } from './switch-to-scene.js'
export { tick } from './tick.js'

/** @typedef {import('./check-for-gameover').Action} CheckForGameoverAction */
/** @typedef {import('./check-for-win').Action} CheckForWinAction */
/** @typedef {import('./select-emoji').Action} SelectEmojiAction */
/** @typedef {import('./select-world').Action} SelectWorldAction */
/** @typedef {import('./set-is-bot').Action} SetIsBotAction */
/** @typedef {import('./set-nickname').Action} SetNicknameAction */
/** @typedef {import('./set-use-open-moji').Action} SetUseOpenMojiAction */
/** @typedef {import('./switch-theme').Action} SwitchThemeAction */
/** @typedef {import('./switch-to-scene').Action} SwitchToSceneAction */
/** @typedef {import('./tick').Action} TickAction */
/** @typedef {CheckForGameoverAction | CheckForWinAction | SelectEmojiAction | SelectWorldAction | SetIsBotAction | SetNicknameAction | SetUseOpenMojiAction | SwitchThemeAction | SwitchToSceneAction | TickAction} Action */
