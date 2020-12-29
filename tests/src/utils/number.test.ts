// Utils
import numberUtils from '../../../src/utils/number';

describe('addCommas function', () => {
  test('Returns the correct formatted number', () => {
    const number = 1_000;
    const expectedFormattedString = '1,000';

    const generatedFormattedString = numberUtils.addCommas(number);

    expect(generatedFormattedString).toBe(expectedFormattedString);
  });

  test('Returns the correct formatted number', () => {
    const number = 1_000_000;
    const expectedFormattedString = '1,000,000';

    const generatedFormattedString = numberUtils.addCommas(number);

    expect(generatedFormattedString).toBe(expectedFormattedString);
  });

  test('Returns the correct formatted number', () => {
    const number = 1_000.01;
    const expectedFormattedString = '1,000.01';

    const generatedFormattedString = numberUtils.addCommas(number);

    expect(generatedFormattedString).toBe(expectedFormattedString);
  });
});
