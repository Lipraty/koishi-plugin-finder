import { Context, Logger, Schema, Service } from 'koishi'
import { } from '@koishijs/plugin-console'
import { resolve } from 'path'
import { FinderDatabase } from './types'
import locales from './locale'

declare module 'koishi' {
  interface Tables {
    finder: FinderDatabase
  }
}

class Finder extends Service {
  // pending upstream to support
  // static [Service.provide] = 'finder'
  // static [Service.inject] = {
  //   required: ['database']
  // }
  static readonly name = 'finder'
  static readonly filter = false
  static readonly inject = {
    required: ['database']
  }

  private log: Logger

  // [Service.setup]() {
  //   super[Service.setup]()
  //   this.log = this.ctx.logger(Finder.name)
  //   this.ctx.inject(['console'], ctx => {
  //     ctx.console.addEntry({
  //       dev: resolve(__dirname, '../client/index.ts'),
  //       prod: resolve(__dirname, '../dist')
  //     })
  //   })
  // }

  constructor(ctx: Context, config: Finder.Config) {
    super(ctx)
    this.config = config
    this.log = ctx.logger(Finder.name)

    ctx.database.extend('finder', {
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

    ctx.inject(['console'], ctx => {
      ctx.console.addEntry({
        dev: resolve(__dirname, '../client/index.ts'),
        prod: resolve(__dirname, '../dist')
      })
    })
  }


}

namespace Finder {
  export interface Config {
    unsafe: boolean
    maxSteps: number
  }

  export const Config: Schema<Config> = Schema.object({
    unsafe: Schema.boolean().default(false),
    maxSteps: Schema.number().default(8).min(1).max(16)
  }).i18n({
    'zh-CN': require('./locales/schema.zh-cn')
  })
}

export default Finder
