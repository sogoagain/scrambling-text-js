import TextScrambler from './TextScrambler';

const texts = [
  '- Friedrich Nietzsche -',
  'Thinking has to be learned in the way dancing has to be learned.',
  'The doer alone learneth.',
  'There are no facts, only interpretations.',
];

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

    texts.forEach((text) => {
      scrambler.scramble(text, handleScramble);
      expect(handleScramble).toHaveBeenLastCalledWith(text);
    });
  });
});
