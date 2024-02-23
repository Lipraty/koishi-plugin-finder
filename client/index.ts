import {Context} from '@koishijs/client'
import Index from './index.vue'

export default(ctx: Context) => {
  ctx.slot({
    type: 'plugin-details',
    component: Index,
    order: 500 //under impls element
  })
}
