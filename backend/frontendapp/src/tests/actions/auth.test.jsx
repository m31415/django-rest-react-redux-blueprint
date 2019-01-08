import { dummyAction } from '../../actions/auth';

describe('dummyAction', () => {
  it('should create an action to do test jest', () => {
    const text = 'Text';
    const expectedDummyAction = {
      type: 'DUMMY_ACTION',
      text,
    };
    expect(dummyAction(text)).toEqual(expectedDummyAction);
  });
});
