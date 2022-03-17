function * idMaker (): Generator<any, any, any> {
  let a = 0;
  console.log('a', a);
  const b = yield a + 1;
  console.log('b', b);
  const c = yield b + 1;
  console.log('c', c);
  return b;
}

const iterator = idMaker();
// first call next method, function will stop where first yield previous position
// so pass arguments for next method doesn't work
console.log(iterator.next());
// next argument will replace yield expression where execution was paused with the argument from next()
console.log(iterator.next(3));
console.log(iterator.next(4));

