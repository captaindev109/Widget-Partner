import add from './add';

describe('add tests', () => {
  it('should return 10 + 10 is 20', () => {
    expect(add(10, 10)).toBe(20);
  });
});
