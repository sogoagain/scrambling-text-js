export default class TextScrambler {
  constructor() {
    this.specialCharacters = ['?', '@', '#', '$', '%', '£', '&', '*', '§', '+'];

    this.targetText = '';
    this.scrambledText = '';
    this.decodingCounter = [];
    this.onScramble = null;
  }

  randomText(length) {
    let text = '';
    for (let i = 0; i < length; i += 1) {
      text += this.specialCharacters[Math.floor(Math.random() * this.specialCharacters.length)];
    }
    return text;
  }

  scramble(text, onScramble) {
    this.targetText = text;
    this.scrambledText = '';
    this.decodingCounter = new Array(this.targetText.length).fill(0)
      .map(() => Math.floor(Math.random() * 12) + 1);
    this.onScramble = onScramble;

    let frameId;
    let frameIndex = 0;

    const decode = () => {
      if (this.scrambledText === this.targetText) {
        cancelAnimationFrame(frameId);
        return;
      }

      if (frameIndex === 0) {
        let decodingText = '';
        for (let i = 0; i < this.decodingCounter.length; i += 1) {
          if (this.decodingCounter[i] === 0) {
            decodingText += this.targetText[i];
            continue;
          }
          decodingText += this.specialCharacters[Math.floor(
            Math.random() * this.specialCharacters.length,
          )];
          this.decodingCounter[i] -= 1;
        }
        this.scrambledText = decodingText;
        this.onScramble(this.scrambledText);
      }

      frameIndex = (frameIndex + 1) % 5;
      frameId = requestAnimationFrame(decode);
    };

    const encode = () => {
      if (frameIndex === 0) {
        if (this.scrambledText.length === this.targetText.length) {
          frameId = requestAnimationFrame(decode);
          return;
        }

        this.scrambledText = this.randomText(this.scrambledText.length + 1);
        this.onScramble(this.scrambledText);
      }

      frameIndex = (frameIndex + 1) % 3;
      frameId = requestAnimationFrame(encode);
    };

    frameId = requestAnimationFrame(encode);
  }
}
