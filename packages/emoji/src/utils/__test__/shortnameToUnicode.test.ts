import shortnameToUnicode from '../shortnameToUnicode';

describe('shortnameToUnicode', () => {
  it('executes in less than 100ms', () => {
    const start = performance.now();
    shortnameToUnicode(':grinning:');
    const executionMs = performance.now() - start;
    expect(executionMs).toBeLessThan(100);
  });
});
