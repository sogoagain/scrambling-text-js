import TextScrambler from './TextScrambler';

const { log } = console;

describe('TextScrambler', () => {
  it('scrambles text', () => {
    const handleScramble = (text) => {
      log(text);
    };

    const scrambler = new TextScrambler();

    scrambler.scramble('Hello World!', handleScramble);
  });
});
