// if we remove strict mode, we can just use Buffer.from($code) (this gives us the hex anyway)
// use hex in case other libraries use strict mode anyway

class AltTerm {
  /**
   * @param codes An array of hex characters.
   *        Strict mode doesn't let us use octal chars
   */
  private printEscapeCode(codes: number[]): void {
    process.stdout.write(Buffer.from(codes));
  }

  public show(clear = true) {
    // oct: \033[?1049h\033[H
    this.printEscapeCode([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x68]);
    if (clear) {
      // when we're already in an alternate terminal (tmux, asciinema), the cursor doesn't move
      // clear and return to home (top-left) by default
      this.clear();
    }
  }

  public hide() {
    // oct: \033[?1049l
    this.printEscapeCode([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x6c]);
  }

  public clear() {
    // in oct: \033[H
    this.printEscapeCode([
      0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x68, 0x1b, 0x5b, 0x48,
    ]);
  }
}

const term = new AltTerm();
export default term;
