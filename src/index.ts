import { Context, Schema } from 'koishi'
import {} from '@koishijs/plugin-console'
import { FinderService } from './service'
import { FinderDatabase } from './types'
import { resolve } from 'path'

declare module 'koishi' {
  interface Tables {
    finder: FinderDatabase
  }
}

export const name = 'finder'

export const filter = false

export const inject = {
  required: ['database']
}

export interface Config {
  unsafe: boolean
}

export const Config: Schema<Config> = Schema.object({
  unsafe: Schema.boolean().default(false).description('<span title="Finder 插件不会审查来自其他插件注册的 Finder 块。">允许来自其他插件注册的 Finder 块</span>')
}).description('基本')

export function apply(ctx: Context) {
  // Database
  ctx.model.extend('finder', {
    id: 'unsigned',
    name: 'string',
    description: 'text',
    tags: 'list',
    trigger: 'json',
    actions: 'json',
    repeated: 'boolean',
    duration: 'integer',
    createdAt: 'timestamp',
    updatedAt: 'timestamp',
  })
  // Interval
  ctx.plugin(FinderService)
  // WebUI
  ctx.inject(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist')
    })
  })
}
