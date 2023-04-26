import {
  CHECK_FOR_GAMEOVER,
  CHECK_FOR_WIN,
  SELECT_EMOJI,
  SELECT_WORLD,
  SET_IS_BOT,
  SET_NICKNAME,
  SET_USE_OPEN_MOJI,
  SWITCH_THEME,
  SWITCH_TO_SCENE,
  TICK
} from '../../../constants.js'
import { getLogger } from '../../../logger.js'
import { initialState } from '../initial.js'
import { checkForGameover } from './check-for-gameover.js'
import { checkForWin } from './check-for-win.js'
import { selectEmoji } from './select-emoji.js'
import { selectWorld } from './select-world.js'
import { setIsBot } from './set-is-bot.js'
import { setNickname } from './set-nickname.js'
import { setUseOpenMoji } from './set-use-open-moji.js'
import { switchTheme } from './switch-theme.js'
import { switchToScene } from './switch-to-scene.js'
import { tick } from './tick.js'

/** @typedef {import('../actions/index').Action} Action */
/** @typedef {import('../initial').State} State */

const logger = getLogger('reducer')

/**
 * Combined reducer to delegate depending on action.type.
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function reducer (state, action) {
  if (typeof state === 'undefined') {
    return /** @type {State} */(initialState)
  }

  switch (action.type) {
    case CHECK_FOR_GAMEOVER:
      return checkForGameover(
        state,
        /** @type {import('../actions/check-for-gameover').Action} */(action).payload
      )
    case CHECK_FOR_WIN:
      return checkForWin(
        state,
        /** @type {import('../actions/check-for-win').Action} */(action).payload
      )
    case SELECT_EMOJI:
      return selectEmoji(
        state,
        /** @type {import('../actions/select-emoji').Action} */(action).payload
      )
    case SELECT_WORLD:
      return selectWorld(
        state,
        /** @type {import('../actions/select-world').Action} */(action).payload
      )
    case SET_IS_BOT:
      return setIsBot(
        state,
        /** @type {import('../actions/set-is-bot').Action} */(action).payload
      )
    case SET_NICKNAME:
      return setNickname(
        state,
        /** @type {import('../actions/set-nickname').Action} */(action).payload
      )
    case SET_USE_OPEN_MOJI:
      return setUseOpenMoji(
        state,
        /** @type {import('../actions/set-use-open-moji').Action} */(action).payload
      )
    case SWITCH_THEME:
      return switchTheme(
        state,
        /** @type {import('../actions/switch-theme').Action} */(action).payload
      )
    case SWITCH_TO_SCENE:
      return switchToScene(
        state,
        /** @type {import('../actions/switch-to-scene').Action} */(action).payload
      )
    case TICK:
      return tick(
        state,
        /** @type {import('../actions/tick').Action} */(action).payload
      )
    default:
      logger.debug('Unknown action type', action.type)
      return state
  }
}
