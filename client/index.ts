import {Context} from '@koishijs/client'
import Index from './index.vue'
import SettingBtn from './setting.vue'

export default(ctx: Context) => {
  ctx.slot({
    type: 'plugin-details',
    component: SettingBtn,
    order: 600
  })
  ctx.slot({
    type: 'plugin-details',
    component: Index,
    order: -1000
  })
}
