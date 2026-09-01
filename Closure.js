function outer() {
  let count = 0; // outer variable

  function inner() {
    count++; // inner function "closes over" count
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() has already finished executing
counter(); // 1
counter(); // 2
counter(); // 3