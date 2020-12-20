import {ActionTypes} from './action-types.enum';

export class Action {
  result?: any;

  constructor(
    public type: ActionTypes,
    public data?: any) {}
}
