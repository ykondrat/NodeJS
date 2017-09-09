module.exports = {
  fname: "Yevhen",
  lname: "Kondratyev",
  age: 25,
  sayHello: function() {
    console.log(`Hello! My name is ${this.fname} ${this.lname} I'm ${this.age} years old`);
  }
}
