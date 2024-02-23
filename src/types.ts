
export interface Condition {}
export interface Actions {}

export interface FinderDatabase {
  id: number,
  name: string,
  description: string,
  tags: string[],
  conditions: Condition[],
  actions: Actions[],
  repeated: boolean,
  duration: number,
  createdAt: Date,
  updatedAt: Date,
}
