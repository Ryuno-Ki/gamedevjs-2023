export { checkForWin } from "./check-for-win.js";
export { selectEmoji } from "./select-emoji.js";
export { setIsBot } from "./set-is-bot.js";
export { setNickname } from "./set-nickname.js";
export { switchToScene } from "./switch-to-scene.js";
export { tick } from "./tick.js";
export type CheckForWinAction = import('./check-for-win').Action;
export type SelectEmojiAction = import('./select-emoji').Action;
export type SetIsBotAction = import('./set-is-bot').Action;
export type SetNicknameAction = import('./set-nickname').Action;
export type SwitchToSceneAction = import('./switch-to-scene').Action;
export type TickAction = import('./tick').Action;
export type Action = CheckForWinAction | SelectEmojiAction | SetIsBotAction | SetNicknameAction | SwitchToSceneAction | TickAction;
