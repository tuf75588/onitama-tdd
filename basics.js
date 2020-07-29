function add() {
  return 4;
}

// what can we do to test this code to make sure it runs correctly?

function assert(condition) {
  if (!condition) {
    throw new Error('Nope....');
  }
  return true;
}

assert(add(2, 2) === 4);
