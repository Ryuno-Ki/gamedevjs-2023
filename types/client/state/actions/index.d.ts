export { setIsBot } from "./set-is-bot.js";
export { setNickname } from "./set-nickname.js";
export { switchToScene } from "./switch-to-scene.js";
export { tick } from "./tick.js";
export type SetIsBotAction = import('./set-is-bot.js').Action;
export type SetNicknameAction = import('./set-nickname.js').Action;
export type SwitchToSceneAction = import('./switch-to-scene').Action;
export type TickAction = import('./tick').Action;
export type Action = SetIsBotAction | SetNicknameAction | SwitchToSceneAction | TickAction;
