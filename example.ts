import altTerm from "./lib/index";

function main() {
  console.log("starting...");
  setTimeout(() => {
    altTerm.show();
    console.log("we are in the terminals alternate screen!");
    setTimeout(() => {
      altTerm.hide();
    }, 1000);
  }, 1000);
}

void main();
