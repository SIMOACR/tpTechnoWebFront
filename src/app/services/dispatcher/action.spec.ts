import {Action} from './action';
import {ActionTypes} from './action-types.enum';

describe('Action', () => {
  it('should create an instance', () => {
    const action = new Action(ActionTypes.FACILITY_GET_ALL, 'payload');
    expect(action).toBeTruthy();
    expect(action.type).toBe(ActionTypes.FACILITY_GET_ALL);
  });
});
