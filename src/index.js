import { aboutSceneComponent } from './client/components/scenes/about.js'
import { gameoverSceneComponent } from './client/components/scenes/gameover.js'
import { levelSceneComponent } from './client/components/scenes/level.js'
import { newGameSceneComponent } from './client/components/scenes/new-game.js'
import { settingsSceneComponent } from './client/components/scenes/settings.js'
import { titleSceneComponent } from './client/components/scenes/title.js'
import { winSceneComponent } from './client/components/scenes/win.js'
import { registerEventListeners } from './client/event-listener.js'
import { add } from './client/registry.js'
import { render } from './client/render.js'
import './index.css'

add('about-scene', aboutSceneComponent)
add('gameover-scene', gameoverSceneComponent)
add('level-scene', levelSceneComponent)
add('new-game-scene', newGameSceneComponent)
add('settings-scene', settingsSceneComponent)
add('title-scene', titleSceneComponent)
add('win-scene', winSceneComponent)

render()
registerEventListeners()
