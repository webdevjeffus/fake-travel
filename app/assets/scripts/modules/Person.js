function Person(fullName, color) {
  this.name = fullName;
  this.favColor = color;
  this.greet = function() {
    console.log("Hello, there! I'm " + this.name + " and my favorite color is " + this.favColor + ".");
  }
}

module.exports = Person;