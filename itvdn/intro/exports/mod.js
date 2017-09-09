var x = 10;

function test() {
  console.log(x);
};

// exports its a obj that return by require
// exports.number = x; // pointer to modile.exports
// exports.func = test;
//exports = x; //error
module.exports = x;
