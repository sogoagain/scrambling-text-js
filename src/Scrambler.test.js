import Scrambler from './Scrambler';

const texts = [
  '- Friedrich Nietzsche -',
  'Thinking has to be learned in the way dancing has to be learned.',
  'The doer alone learneth.',
  'There are no facts, only interpretations.',
];

describe('Scrambler', () => {
  const handleScramble = jest.fn();

  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
    handleScramble.mockClear();
  });

  afterEach(() => {
    window.requestAnimationFrame.mockRestore();
  });

  it('scrambles text', () => {
    const scrambler = new Scrambler();

    texts.forEach((text) => {
      scrambler.scramble(text, handleScramble);
      expect(handleScramble).toHaveBeenLastCalledWith(text);
    });
  });

  describe('with the option to set the characters to use when scrambled', () => {
    it('scrambles text', () => {
      const scrambler = new Scrambler();

      texts.forEach((text) => {
        scrambler.scramble(text, handleScramble, {
          charactersToUseWhenScrambling: ['a', 'b', 'c'],
        });
        expect(handleScramble).toHaveBeenLastCalledWith(text);
      });
    });
  });

  it('provides default characters', () => {
    const defaultCharacters = Scrambler.CHARACTERS.DEFAULT;
    defaultCharacters.includes('*', '@');

    const alphabetCharacters = Scrambler.CHARACTERS.ALPHABET;
    alphabetCharacters.includes('a', 'b', 'c', 'd', 'e');
  });
});
