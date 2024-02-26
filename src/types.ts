export interface Trigger {
  type: TriggerType,
}

export enum TriggerType {
  MESSAGE = 'message',
  INTERVAL = 'interval',
  SCHEDULE = 'schedule',
  EVENT = 'event',
}

export interface Actions { }

export enum ActionType {

}

export interface FinderDatabase {
  id: number,
  name: string,
  description?: string,
  tags: string[],
  trigger: Trigger[],
  actions: Actions[],
  repeated: boolean,
  duration: number,
  createdAt: Date,
  updatedAt: Date,
}
