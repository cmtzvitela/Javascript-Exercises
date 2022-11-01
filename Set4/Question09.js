const fib = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(29));
console.log(fib(30));
console.log(fib(31));
console.log(fib(32));
console.log(fib(33));
