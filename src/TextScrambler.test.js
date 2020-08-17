import TextScrambler from './TextScrambler';

describe('TextScrambler', () => {
  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
  });

  afterEach(() => {
    window.requestAnimationFrame.mockRestore();
  });

  it('scrambles text', () => {
    const handleScramble = jest.fn();

    const scrambler = new TextScrambler();
    scrambler.scramble('Hello World!', handleScramble);

    expect(handleScramble).toHaveBeenLastCalledWith('Hello World!');
  });
});
