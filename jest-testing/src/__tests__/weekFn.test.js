const weekFn = require('../weekFn');

describe('weekFn', () => {
  test('should return correct day of the week for valid inputs', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe('П\'ятниця');
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
  });

  test('should return null for invalid inputs', () => {
    expect(weekFn(9)).toBe(null);
    expect(weekFn(1.5)).toBe(null);
    expect(weekFn('2')).toBe(null);
  });
});
