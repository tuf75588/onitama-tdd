function add(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Arguments must be integers');
  }
  return a + b;
}

// what can we do to test this code to make sure it runs correctly?

function assert(condition) {
  if (!condition) {
    throw new Error('Nope....');
  }
}

let caughtError = {};
try {
  add(2, '2');
} catch (error) {
  console.log(error);
  caughtError = error;
}

assert(caughtError);
