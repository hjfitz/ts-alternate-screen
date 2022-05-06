class AltTerm {
  private printEscapeCode(codes: number[]): void {
    process.stdout.write(Buffer.from(codes));
  }

  public show() {
    this.printEscapeCode([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x68]);
    this.clear();
  }

  public hide() {
    this.printEscapeCode([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x6c]);
  }

  public clear() {
    this.printEscapeCode([
      0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x68, 0x1b, 0x5b, 0x48,
    ]);
  }
}

const term = new AltTerm();

function main() {
  console.log("starting...");
  setTimeout(() => {
    term.show();
    console.log("we are in the terminals alternate screen!");
    setTimeout(() => {
      term.hide();
    }, 1000);
  }, 1000);
}

main();
