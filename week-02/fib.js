function fib(n) {
    // TODO: implement fibonacci
    if(n == 0)
        return 0;
    else if(n == 1)
        return 1;
    else
        return fib(n-1) + fib(n-2);
  }
  
  fib(0); // 0
  fib(1); // 1
  fib(5); // 5
  fib(10); // 55
  console.log(fib(0));
  console.log(fib(1));
  console.log(fib(5));
  console.log(fib(10));