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

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  //
  ctx.model.extend('finder', {
    id: 'unsigned',
    name: 'string',
    description: 'text',
    tags: 'list',
    conditions: 'json',
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
