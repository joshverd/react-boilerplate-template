import timeUtils from '../../utils/time';

test('Time must return a string', () => {
  const time = timeUtils.getTime();

  expect(typeof time).toEqual('string');
});

test('Time must return a UTC string', () => {
  const time = timeUtils.getTime();

  const dateObject = new Date(time).getTime();

  expect(dateObject).not.toBeNaN();
});
