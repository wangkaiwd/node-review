## Async Await
* generator function
  * yield promise
* co: auto execute generator
* babel compile code
* test
### generator function
1. return iterator
2. call iterator `next` method start to execute generator function
3. pause before `yield` keyword
4. execute `next` resume execute generator function and pause before `yield` keyword again
5. repeat step 4 until execute all code of generator function or encounter return value
6. next method argument will replace `yiled` keyword
