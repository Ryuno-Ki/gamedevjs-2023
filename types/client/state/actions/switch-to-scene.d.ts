/** @typedef {import('../../components/scenes/index').Scene} Scene */
/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {Scene} payload.scene
 */
/**
 * Action creator to switch a scene.
 *
 * @param {Scene} scene
 * @returns {Action}
 */
export function switchToScene(scene: Scene): Action;
export type Scene = import('../../components/scenes/index').Scene;
export type Action = {
    type: string;
    payload: {
        scene: Scene;
    };
};
