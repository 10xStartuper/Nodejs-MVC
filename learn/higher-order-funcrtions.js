/*
Result: in order for self creating self continueing higher order functions we need recursion with higher order functions.
*/
const appleHack = (adjective) => {
  return (string) => adjective + " " + string;
};

const injecter = appleHack("Dev");
console.log(injecter("Hacker"));

function add(n) {
  var addNext = function (x) {
    if (x == undefined) {
      return n;
    } else {
      return add(n + x);
    }
  };
  addNext.valueOf = function () {
    return n;
  };
  return addNext;
}

console.log(add(1)(2)(3)(4)(10) == 20); //true
console.log(add(1)(2)(3)(4)() == 10); //true

const a = (a) => {
  const b = (b) => {
    return a(a + b);
  };
  b.valueOf = a;
  return b;
};
