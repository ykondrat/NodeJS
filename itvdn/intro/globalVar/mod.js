var x = 10;

function test() {
  console.log(x);
}

global.number = x;
global.func = test;
