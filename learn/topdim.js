const add = (a) => {
  const bb = (b) => {
    return add(a + b);
  };
  bb.valueOf = a;
  return bb;
};
console.log(add(1)(2)(3)(4)(5)(6)(7)(8));
