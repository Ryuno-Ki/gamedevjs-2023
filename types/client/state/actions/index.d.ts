export { switchToScene } from "./switch-to-scene.js";
export { tick } from "./tick.js";
export type SwitchToSceneAction = import('./switch-to-scene').Action;
export type TickAction = import('./tick').Action;
export type Action = SwitchToSceneAction | TickAction;
