let outerfunction = () => {
  let name = "LAVG";
  let innerfunction = () => {
    console.log(name);
  };
  return innerfunction;
};

let closure = outerfunction();
closure();

let currying = (a) => {
  return (b) => {
    return (c) => {
      console.log(a + b + c);
    };
  };
};
currying(3)(2)(1);
