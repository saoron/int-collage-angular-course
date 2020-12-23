import { AddCommaPipe } from './add-comma.pipe';

describe('AddCommaPipe', () => {
  const pipe = new AddCommaPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "abc, "', () => {
    expect(pipe.transform('abc')).toBe('abc, ');
  });
});
