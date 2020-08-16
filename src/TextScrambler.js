export default class TextScrambler {
  scramble(text, onScramble) {
    this.text = text;
    onScramble(this.text);
  }
}
