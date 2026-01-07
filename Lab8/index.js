function twoParams(param1, param2) {
  if (arguments.length !== 2) {
    throw new Error("twoParams requires exactly two arguments");
  }
  return [param1, param2];
}

function adding(...args) {
  if (args.length === 0) {
    throw new Error("adding requires at least one argument");
  }

  for (let arg of args) {
    if (typeof arg !== "number") {
      throw new Error("All arguments to adding must be numbers");
    }
  }

  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}

try {

// twoParams("hello", "world");
// twoParams(1);
// twoParams(1, 2, 3);
// twoParams();

// adding(1, 2, 3, 4, 5);
// adding();
// adding(1, "two", 3);

} catch (error) {
  console.error(error.message);
}

