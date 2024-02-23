import { Context, Service } from "koishi"

declare module 'koishi' {
  interface Context {
    finder: FinderService
  }
}

export class FinderService extends Service {
  constructor(ctx: Context) {
    super(ctx, 'finder')
  }

}
